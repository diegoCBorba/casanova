import doubts from "./Doubts.module.css"

import { Doubt } from "./division/Doubt"

export const Doubts = () => {
  return (
    <section id="#doubts" className="container-section">
      <div className={doubts.containerMaster}>
        <div className={doubts.containerAbout}>
          <h2>Dúvidas Frequentes</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa ipsa voluptas iusto officiis recusandae libero accusamus a eum possimus!</p>
        </div>

        <div className={doubts.containerDoubts}>
          <Doubt title="Lorem ipsum dolor sit">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugiat commodi, illo velit sequi iusto vel ducimus tempora itaque, soluta perferendis tenetur, suscipit saepe repudiandae cum dolorem et illum maiores.
          </Doubt>
          <Doubt title="Lorem ipsum asdas sit">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ea voluptates, quisquam architecto velit aspernatur ex. Quae modi cum dolore ut, illum consequuntur neque nihil, itaque iure voluptas ex deleniti!
          </Doubt>
        </div>
      </div>
    </section>
  )
}
