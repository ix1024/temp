import fetch from "cross-fetch";
import Link from "next/link";
import { withRouter } from "next/router";
// import dynamic from 'next/dynamic'
import css from "./about.scss";

const Page = (obj) => {
  //   const { stars } = obj;

  // console.log(obj);
  return (
    <div>
      <div>
        <Link href="/">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
};

// Page.getInitialProps = async ({ req }) => {
//   const res = await fetch("https://api.github.com/repos/zeit/next.js");
//   const json = await res.json();
//   console.log("page file");
//   return { stars: json.stargazers_count };
// };

export default withRouter(Page);
