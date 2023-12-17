/* eslint-disable */
module.exports = {
  '*.{js,ts}': (filenames) => {
    const escapedFileNames = filenames.join(' ');
    return [
      `prettier --write ${escapedFileNames}`,
      `eslint --no-ignore --max-warnings=0 --fix ${filenames
        .map((f) => `"${f}"`)
        .join(' ')}`,
      `git add ${escapedFileNames}`,
    ];
  },
};
