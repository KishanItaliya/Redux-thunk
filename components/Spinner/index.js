import Head from "next/head";

const Spinner = () => {
  return (
    <div>
      <Head>
        <link href="../../styles/Spinner.css" rel="stylesheet" />
      </Head>
      {/* <div className="Loader"></div> */}
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Spinner;
