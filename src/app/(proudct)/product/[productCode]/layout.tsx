import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import NavBar from "@/components/ui/NavBar";

function layout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <NavBar />
      {modal}
      {children}
      <Footer />
    </>
  );
}
export default layout;
