import Nav from "./Nav";

export default function Layout({ children }: any) {
  //TODO
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
