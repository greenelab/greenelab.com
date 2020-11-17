# greenelab.com

The website source code for greenelab.com

## Guide to editing

### Making changes to the site

To make a change to the site, make a pull request from a branch or your own fork.
Once you make the PR, [Netlify](https://app.netlify.com/sites/greenelab-website/overview) should automatically make [a preview](https://cdn.netlify.com/4d4d418736774eaea776b4ab08ee07af4a0bc5a9/c6be8/img/blog/deploy-preview-success.png) where you can see and test your changes before merging them.

See the "Overview of contents" section below to find where and how to edit certain parts of the site.
Anything you change should update in the preview no problem, with one exception: 

If you're updating publications on the "Research" page, a script needs to be run to generate citations.
To run the script, either manually run `./build.sh` locally, or make your PR as a branch ([this upstream bug](https://github.com/EndBug/add-and-commit/issues/53) prevents forks from working for now) to have it run automatically.

### Review process

**If you are modifying `.html` files, `.css` files, `.js` files, [liquid](https://jekyllrb.com/docs/liquid/) syntax, icons, config files, bash scripts, or python scripts**, request a review from @vincerubinetti or someone else very knowledgeable in HTML/CSS/JavaScript/Jekyll.

**If you are modifying `.md` files or `/images` files**, request a review from @cgreene.

When in doubt, request a review from both.

### Local preview

If you want to test your changes locally, before making a pull request, you'll need to install a few things:

- [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Install RubyGems](https://rubygems.org/pages/download)
- [Install Jekyll](https://jekyllrb.com/)

Then, run `./start.sh`.

### Overview of contents

Here are some important directories and files you'll want to know about.

**Directories**

- `/.github` - GitHub Actions config info
- `/_data` - Intended to contain large, order-preserved sets of data to be formatted and displayed on a page
- `/_includes` - Small, reusable snippets of HTML content that can take parameters
- `/_layouts` - Templates that all pages will be built upon
- `/_members` - Collection of team members, non-order-preserved.
  Each file will generate its own page, per `_config.yml`.
- `/_posts` - Collection of blog posts. Each file will generate its own page per Jekyll default behavior.
- `/_site` - The built/processed output of the entire Jekyll site.
  This is what GitHub will read to make the GitHub Pages site.
- `/css` - Site-wide CSS files, and CSS files for `_includes`
- `/js` - Site-wide JavaScript files
- `/icons` - Favicons, share thumbnails, and related metadata icons
- `/blog`, `/contact`, or any other directory - A sub-directory to make in the resulting site.
  An `index.md` will be the default page when user navigates to the sub-directory.
  I.e. `https://greenelab.com/join` will redirect to `https://greenelab.com/join/index.html` (generated from `index.md`).
  Any `.css` or `.js` files in the directory will be automatically included for that sub-directory only.

**Files**

- `/_data/research-input.yml` - A list of just identifiers (and some sparse metadata) for publications to put on the "Research" page.
Gets automatically processed into the corresponding output file with full citations.
- `/_data/research-output.yml` - The generated, actual list of publications that ends up getting displayed on the "Research" page, with full citation data
- `/_data/resources.yml` - The list of resources on the "Resources" page
- `_config.yml` - Jekyll configuration
- `404.md` - Default 404 page for when user navigates to page on the domain that isn't defined
- `build.sh` - Convenient bash script to rebuild the research page
- `start.sh` - Convenient bash script to run a local preview of the site
- `Gemfile` and `Gemfile.lock` - Files that specify the package dependencies of the project.
  Similar to `package.json` and `package-lock.json` in `npm`.
- `index.md`, `index.css`, etc. - Home page (i.e. `greenelab.com/`) files.
  Works in the same manner as sub-directories, except applied to the root directory.

### Style

For color, logos, etc., follow the [Greene Lab style guidelines](https://github.com/greenelab/brand).

### Thumbnails

For making thumbnail images for publications, resources, etc., follow the [Manubot thumbnail guidelines](https://github.com/manubot/catalog#thumbnail-guidelines).

### Help

In general, if you have a question about a particular part of the site, check the corresponding file for comments.
If something is not clear, create an issue to update the documentation.
