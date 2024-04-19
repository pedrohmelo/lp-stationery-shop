const Navbar = () => {
  return (
    <main className="flex items-center justify-between py-4 px-5 bg-pink-100">
      <div>Imagem</div>
      <div className="flex gap-x-2">
        <h1>Sobre nós</h1>
        <h1>Produtos</h1>
        <h1>Orçamentos</h1>
      </div>
    </main>
  );
};

export default Navbar;
