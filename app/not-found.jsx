import Link from "next/link";

const Default = () => {
   return (
      <section>
         <h1>404</h1>
         <p>Pagina no encontrada</p>
         <Link href="/">Volver</Link>
      </section>
   );
};

export default Default;
