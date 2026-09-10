# Writer's Hook

Website for Writer's Hook — a free one-day creative write-a-thon for high school
writers. Saturday, November 7, 2026, Los Altos Hills Town Hall.

Rebranded from LearningHACK. The old site's exported fragments live in the parent
directory; this folder is a complete, self-contained Jekyll site.

## Where the content lives

Copy is kept out of the templates so it can be edited without touching HTML.

| What | File |
|---|---|
| Event date, venue, times, register links | `_config.yml` (`event:` block) |
| Hero headline and sub-headline | `index.md` |
| About page | `about.md` |
| FAQ answers | `_data/faq.yml` |
| Tracks and genres | `_data/tracks.yml` |
| "What to expect" blocks | `_data/expect.yml` |
| Schedule | `_data/schedule.yml` (set `draft: false` to drop the "times not final" tag) |
| Nav and footer links | `_data/menus.yml` |
| Code of conduct | `conduct.md` |
| Sponsor / mentor page | `support.md` |

## Running it locally

Needs Ruby 3.x. Homebrew's is at `/opt/homebrew/opt/ruby/bin`; the system Ruby 2.6
is too old.

```
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
export GEM_HOME="$PWD/vendor/gems"
export PATH="$GEM_HOME/bin:$PATH"

bundle install          # first time only
jekyll serve            # http://127.0.0.1:4000
jekyll build            # writes _site/
```

## Design

Cream page, black bands, turquoise accent. Instrument Serif for display, Spectral
for running copy, Courier Prime for labels and data. Light and dark themes are
driven by CSS custom properties in `_sass/base/_variables.scss` — change a colour
there and it changes everywhere.

## Still to do

- Real registration and mentor/sponsor form URLs (`_config.yml` → `event.register_url`, `event.mentor_url`)
- Confirm event start and end times
- Logo and favicon artwork (`images/logo/`, `images/favicon-32x32.svg`)
- Organizer bios (`_team/`) — the LearningHACK-era ones need rewriting
- Confirm whether Hack Club and Foothill College are returning sponsors
  (`images/sponsors/`, `_data/sponsors.json` is currently empty)
