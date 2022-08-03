import Head from "next/head";

interface PageProps {
  title?: string;
  children: React.ReactNode;
}

const Page = ({ title, children }: PageProps) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | Ferramenta de Grid para Desenhistas`
            : "Ferramenta de Grid para Desenhistas"}
        </title>
      </Head>

      {children}
    </>
  );
};

export default Page;
