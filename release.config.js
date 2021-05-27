/* eslint-disable no-template-curly-in-string */
/**
 * Docs
 * @see https://github.com/semantic-release/semantic-release/blob/1d1b52a7dc02e63c41308f4d196983e0b5081e51/docs/usage/configuration.md
 * @see https://github.com/semantic-release/semantic-release/blob/1d1b52a7dc02e63c41308f4d196983e0b5081e51/docs/recipes/github-actions.md
 */
module.exports = {
  branches: ['main'],
  tagFormat: '${version}',
  plugins: [
    // verify commits
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    // generate release notes
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
      },
    ],
    // generate CHANGELOG.md
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# nextjs-template Changelog',
      },
    ],
    // publish a new release on github
    '@semantic-release/github',
    //  commit release assets to the project's git repository.
    '@semantic-release/git',
  ],
}
