<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the visual theme in src/styles.css semantic tokens; shared site components carry navigation, project artwork and page discovery so every content route stays visually consistent.
- Put secondary-page back navigation in the shared PageHero, using router history with a home fallback for direct visits; source named brand icons from Simple Icons to preserve authentic silhouettes.
