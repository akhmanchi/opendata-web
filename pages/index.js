// Here's an example of what a sample page looks like.
// See more: https://nextjs.org/learn/basics/getting-started/first-page

// export default () => (
//   <div>
//     <p>Hello DSC!</p>
//   </div>
// )

import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Link href = "/pages">
        <a>About page</a>
      </Link>
      <p>Hello Next.js</p>
      <p>
        This is another one.
      </p>
    </div>
  );
}