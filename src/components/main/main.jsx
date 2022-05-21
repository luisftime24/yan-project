import "./main.css";

export function Main(props) {
  const {
    children
  } = props;

  return <main className="container">{children}</main>;
    }