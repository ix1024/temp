import fetch from "cross-fetch";
import Link from "next/link";
import { withRouter } from "next/router";
// import dynamic from 'next/dynamic'

const Page = (obj) => {
  const { stars } = obj;

  // console.log(obj);
  return (
    <div>
      <div>
        <Link href="/about">
          <a>index</a>
        </Link>
      </div>
      {stars}
    </div>
  );
};

Page.getInitialProps = async ({ req }) => {
  //   const res = await fetch("https://api.github.com/repos/zeit/next.js");
  //   const json = await res.json();
  //   console.log("page file");
  return { stars: 99 };
};

export default withRouter(Page);
