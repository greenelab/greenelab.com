# script to build bibliography of papers on "research" page

# before running:
# install python          https://www.python.org/downloads/
# install pip             https://pip.pypa.io/en/stable/installing/
# install manubot         https://github.com/manubot/manubot#installation

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

# get list of paper identifiers
ids = [p['id'] for p in input_papers]

# run manubot to get citation metadata for papers
subprocess.run(["manubot", "cite", "--log-level", "DEBUG", "--output", output_file, *ids])

# open output file from manubot
with open(output_file, encoding="utf8") as file:
  output_papers = json.load(file)

# construct new list of papers with only the needed properties
new_papers = []
for old_paper in output_papers:
  new_paper = {}
  # paper title
  new_paper["title"] = old_paper.get("title", "")
  # paper authors
  new_paper["authors"] = []
  for author in old_paper.get("author", []):
    new_author = author.get("given", "") + " " + author.get("family", "")
    new_paper["authors"].append(new_author)
  # paper publisher
  new_paper["publisher"] = old_paper.get("publisher", "")
  # paper date
  date_parts = old_paper.get("issued").get("date-parts")[0]
  date_parts += (3 - len(date_parts)) * [1] # default month and day to 0
  new_paper["date"] = "-".join([str(part) for part in date_parts])
  # paper url
  new_paper["url"] = old_paper.get("URL", "")
  # add to list
  new_papers.append(new_paper)

# write new list of papers to output file
with open(output_file, mode="w") as file:
  json.dump(new_papers, file, indent=2)
