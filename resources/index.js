const api = "https://api.github.com/repos/REPO/topics";
// NOTE: the github api to get repo "topics (tags) is still in preview
const headers = { Accept: "application/vnd.github.mercy-preview+json" };

// fetch tags from github repo, if specified
const getTags = async (tool) => {
  const repo = tool.dataset.repo;
  if (!repo) return;

  // get tags from github api
  const url = api.replace("REPO", repo);
  const tags = (await (await fetch(url, { headers })).json()).names;

  // create tag elements
  for (const tag of tags) {
    const span = document.createElement("span");
    span.className = "resource_tag";
    span.innerHTML = tag;
    tool.append(span);
  }
};

// generate tags for each tool
Array.from(document.querySelectorAll(".resource_tags")).forEach(getTags);
