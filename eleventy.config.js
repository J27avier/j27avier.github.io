export default function (eleventyConfig) {
  // Copy static images and self-hosted fonts straight through to the output.
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Format a Date as YYYY-MM-DD for templates.
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toISOString().slice(0, 10)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
