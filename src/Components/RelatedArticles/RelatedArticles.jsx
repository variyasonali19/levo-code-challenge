import randomColor from "randomcolor";
import React, { useEffect, useState } from 'react';
import { Button, Row, Spinner } from 'react-bootstrap';
import { getRelatedArticlesApi } from '../APICall/APICall';
import Article from '../Article/Article';

const RelatedArticles = () => {
  const ArticleBatchSize = 3; // define number of articles to load on each "READ MORE" click
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [articlesToShow, setArticlesToShow] = useState(ArticleBatchSize);
  const [isArticleExpanded, setIsArticleExpanded] = useState(false);

  // calling api to get data
  const getRelatedArticles = async () => {
    try {
      const result = await getRelatedArticlesApi();
      setRelatedArticles(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRelatedArticles();
  }, []);

  // show more cards as per defined ArticleBatchSize when user clicks "READ MORE" at bottom right
  // show default cards on first load and when user clicks "READ LESS"
  const loadArticleCards = () => {
    articlesToShow >= relatedArticles.length ? setArticlesToShow(ArticleBatchSize) : setArticlesToShow(articlesToShow + ArticleBatchSize);
    setIsArticleExpanded(!isArticleExpanded);
  }

  // show loader till data is not set in relatedArticles state
  if (relatedArticles.length === 0) {
    return (
      <div className="spinnerContainer" >
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }

  return (
    <div className="infoContainer" >
      <h3>Related Articles</h3>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quaerat repellat voluptatem itaque ea tempore id magni autem at eligendi?
        Voluptas vel sapiente dolores reiciendis alias. Amet tempora a fugiat animi.
      </p>
      <Row>
        {relatedArticles.slice(0, articlesToShow).map((data, index) => {
          const backgroundColor = randomColor();
          return (
            <Article
              key={`${data.title - index}`}
              date={data.date}
              title={data.title}
              paraText={data.paraText}
              buttonTitle={data.buttonTitle}
              backgroundColor={backgroundColor}
            />
          )
        })}
      </Row>
      <Button variant="outline-danger" onClick={loadArticleCards} >
        {articlesToShow >= relatedArticles.length ? "READ LESS" : "READ MORE"}
      </Button>
    </div >
  );
}

export default RelatedArticles;
