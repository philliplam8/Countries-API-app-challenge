interface LinkProps {
  label: string;
  link: string;
}

function Link(props: LinkProps): JSX.Element {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="font-bold hover:underline active:underline"
    >
      {props.label}
    </a>
  );
}

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-row flex-wrap justify-center mx-7 py-5 text-xs">
      <p>
        Challenge by{" "}
        <Link
          label="Frontend Mentor"
          link="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
        />
        . Coded by{" "}
        <Link
          label="Phillip Lam"
          link="https://github.com/philliplam8/Countries-API-app-challenge"
        />
        .
      </p>
    </footer>
  );
}
