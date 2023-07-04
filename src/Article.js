import BrooklynImg from './blog-image-1.jpg';
import VintageImg from './blog-image-2.jpg';

export default function Article() {
    const articles = [{
        date: '11/12/20',
        title: 'On the Street in Brooklyn',
        img: BrooklynImg,
        alt: 'Woman walking past blue brick building.',
        contents: 'Cray ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus laudantium voluptatibus accusantium eligendi ex esse quasi autem eveniet molestias. Hic illo reprehenderit quos similique odit aut repudiandae cum corrupti. Fuga, minima incidunt! Eligendi tempora placeat non mollitia nostrum doloribus accusantium. Quas iusto provident nesciunt sequi est, esse, dicta unde dolore eveniet saepe tenetur sed id ad rerum? Enim unde id tenetur. Ipsam magni magnam nobis, quo eos architecto ad aperiam veritatis ullam? Omnis, cum dolorum! Rem impedit modi dignissimos animi quas distinctio minus earum recusandae dolor asperiores ipsam culpa tenetur saepe, voluptatibus harum iste. Expedita, harum! Quis, autem fugit.'
      }, {
        date: '11/11/20',
        title: 'Vintage in Vogue',
        img: VintageImg,
        alt: 'Group of three models standing together.',
        contents: 'Selfies sunt, sit amet consectetur adipisicing elit. Sunt nihil magnam iste esse ratione ducimus voluptatum cumque, fugiat odit exercitationem fugit quae obcaecati consequuntur dolores, hic minus repudiandae doloribus nisi porro vel doloremque delectus. Repudiandae error quisquam ratione mollitia debitis ducimus quis recusandae, iste asperiores culpa doloribus nam architecto vitae harum nostrum aperiam quasi eos dolorum esse commodi officiis veritatis! Perferendis, distinctio ratione deleniti molestias quasi vitae numquam, fugiat blanditiis quaerat delectus voluptatem vero doloribus in error adipisci id commodi quam inventore obcaecati quidem ex! Nemo aperiam enim consequuntur eveniet voluptatem unde sequi cum. Alias necessitatibus quam voluptas dolore eius.'
    }];
    return (
        <main>
            {articles.map((article) => {
                return (
                    <article>
                        <time>{article.date}</time>
                        <h2>{article.title}</h2>
                        <img src={article.img} alt={article.alt}></img>
                        <p>{article.contents}</p>
                        <div className="ReadMore">
                            <a href='...'>Continues ...</a>
                        </div>
                        
                        <hr />
                    </article>
                )
            })}
        </main>
    )
}