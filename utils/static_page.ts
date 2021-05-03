import matter from 'gray-matter';
import fs from 'fs';

export function getPostsFolders() {
  // Get all posts folders located in `content/posts`
  const postsFolders = fs
    .readdirSync(`${process.cwd()}/static_pages/page`)
    .map((folderName) => ({
      directory: folderName,
      filename: `${folderName}.md`,
    }));

  return postsFolders;
}

export function getSortedPosts() {
  const postFolders = getPostsFolders();

  const posts = postFolders.map(({ filename, directory }) => {
    // Get raw content from file
    const markdownWithMetadata = fs
      .readFileSync(`static_pages/page/${directory}/${filename}`)
      .toString();

    // Parse markdown, get frontmatter data, excerpt and content.
    const { data, excerpt, content } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
    };

    // Remove .md file extension from post name
    const slug = filename.replace('.md', '');

    return {
      slug,
      frontmatter,
      excerpt,
      content,
    };
  });

  return posts;
}

export function getPostsSlugs() {
  const postFolders = getPostsFolders();

  const paths = postFolders.map(({ filename }) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return paths;
}

export function getPostBySlug(slug: string) {
  const posts = getSortedPosts();

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

  const { frontmatter, content, excerpt } = posts[postIndex];

  return { frontmatter, post: { content, excerpt } };
}
