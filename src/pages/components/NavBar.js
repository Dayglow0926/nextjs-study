import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/about"
        className={router.pathname === "/about" ? "active" : ""}
      >
        About
      </Link>
      {/* a태그 없이 Link 태그에 속성 부여하기위해 global 추가 */}
      <style jsx global>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
