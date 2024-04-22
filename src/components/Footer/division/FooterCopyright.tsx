import footer from "../Footer.module.css"

export const FooterCopyright = () => {
  return (
    <div className={footer.containerCopyright}>
      <p>&copy; 2024 Casa Nova. Todos os direitos reservados.</p>
      <p>Desenvolvido por
        <a href="https://diegocardoso.vercel.app/" target="_blank"> Diego Cardoso</a>
      </p>
    </div>
  )
}
