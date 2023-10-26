import Link from "next/link";

export const metadata = {
   title: "Tienda - PruebaWeb",
};

const StoreLayout = ({ children }) => {
   return (
      <>
         <nav>
            <h3>Seccion Tienda</h3>
            <ul>
               <li>
                  <Link href="/store/category">Categoria</Link>
               </li>
               <li>
                  <Link href="/store/category/computers">Computadoras</Link>
               </li>
            </ul>
         </nav>
         {children}
      </>
   );
};
export default StoreLayout;
