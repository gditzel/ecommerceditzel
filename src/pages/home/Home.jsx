import ItemListContainer from "../../components/itemListContainer/ItemListContainer";

export function Home() {
  let saludo = "Hola soy la página Home";

  return (
    <>
      <div className="text-center h-screen">
        <ItemListContainer saludo={saludo} />
      </div>
    </>
  );
}
