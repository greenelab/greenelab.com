# greenelab.com
The website source code for greenelab.com

## Guide to editing

### Installation

- [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Install RubyGems](https://rubygems.org/pages/download)
- [Install Jekyll](https://jekyllrb.com/)

### Overview of contents

*Directories*

- `/.github` - GitHub Actions config info
- `/_data` - Intended to contain large, order-preserved sets of data to be formatted and displayed on a page
- `/_includes` - Small, reusable snippets of HTML content that can take parameters
- `/_layouts` - Templates that all pages will be built upon
- `/_members` - Non-order-preserved collection of team members.
Each file will generate its own page, per `_config.yml`.
- `/_posts` - Collection of blog posts. Each file will generate its own page per Jekyll default behavior.
- `/_site` - The built/processed output of the entire Jekyll site.
This is what GitHub will read to make the GitHub Pages site.
- `/css` - Site-wide and `includes` CSS files
- `/js` - Site-wide JavaScript files
- `/icons` - Favicons, share thumbnails, and related metadata icons
- `/blog`, `/contact`, or any other directory - A sub-directory to make in the resulting site.
An `index.md` will be the default page when user navigates to the sub-directory.
I.e. `https://greenelab.com/join` will redirect to `https://greenelab.com/join/index.html` (generated from `index.md`).
Any `.css` or `.js` files in the directory will be automatically included for that sub-directory only.

*Root files*

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

For making thumbnail images for papers or resources, follow the [Manubot thumbnail guidelines](https://github.com/manubot/catalog#thumbnail-guidelines).

### Help

In general, if you have a question about a particular part of the site, check the corresponding file for comments.
If something is not clear, create an issue to update the documentation.
