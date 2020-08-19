# a script to build the full bibliography of papers for the research page

# before running:
# install python                    https://www.python.org/downloads/
# install pip                         https://pip.pypa.io/en/stable/installing/
# install manubot                 https://github.com/manubot/manubot#installation

import os
import json
import yaml
import subprocess

# input and output files
current_dir = os.path.dirname(os.path.realpath(__file__))
input_file = os.path.join(current_dir, "research-input.yml")
output_file = os.path.join(current_dir, "research-output.json")

# load input papers as yaml
with open(input_file, encoding="utf8") as file:
    input_papers = yaml.load(file, Loader=yaml.FullLoader)

# run manubot for each paper to get citation metadata
citations = []
for index, input_paper in enumerate(input_papers, start=1):
    # show progress
    print('\n------------------------------')
    print('Paper ' + str(index) + ' of ' + str(len(input_papers)))
    print('------------------------------\n')
    # run manubot
    commands = ["manubot", "cite", input_paper['id'], "--log-level", "DEBUG"]
    output = subprocess.Popen(commands, stdout=subprocess.PIPE)
    citations.append(json.loads(output.communicate()[0])[0])

# construct new list of papers with only the needed info from the citations
new_papers = []
for citation in citations:
    new_paper = {}
    # paper title
    new_paper["title"] = citation.get("title", "")
    # paper authors
    new_paper["authors"] = []
    for author in citation.get("author", []):
        new_author = author.get("given", "") + " " + author.get("family", "")
        new_paper["authors"].append(new_author)
    # paper publisher
    new_paper["publisher"] = citation.get("publisher", "")
    # paper date
    date_parts = citation.get("issued").get("date-parts")[0]
    date_parts += (3 - len(date_parts)) * [1] # default month and day to 0
    new_paper["date"] = "-".join([str(part) for part in date_parts])
    # paper url
    new_paper["url"] = citation.get("URL", "")
    # add to list
    new_papers.append(new_paper)

# merge any extra properties specified in the input papers into the final output
for index, new_paper in enumerate(new_papers):
    new_paper.update(input_papers[index])    

# write new list of papers to output file
with open(output_file, mode="w") as file:
    json.dump(new_papers, file, indent=2)
