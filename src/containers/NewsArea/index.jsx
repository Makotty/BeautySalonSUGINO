import React from "react"
import { Link } from "gatsby"

import NewsAreaStyle from "../../components/NewsAreaStyle"

const NewsArea = ({ data }) => {
  return (
    <NewsAreaStyle>
      {data.allContentfulNews.edges.map(({ node }) => {
        return (
          <ul
            className="c-newsContentsItem u-mb__12px u-pb__12px"
            key={node.id}
          >
            <Link to={`/news/${node.slug}`}>
              <li className="c-newsContentsItem--day u-ml__32px">
                {node.publishDateJP}
              </li>
              <li className="c-newsContentsItem--title u-ml__96px">
                {node.title}
              </li>
            </Link>
          </ul>
        )
      })}
    </NewsAreaStyle>
  )
}

export default NewsArea
