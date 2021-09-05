const relatedArticles = [{
    date: "2020-03-12T12:37:05.637Z",
    title: "Love of learning, art keys to a great year of Gwen",
    paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla libero cum illum neque voluptas sequi omnis expedita voluptate porro repudiandae aliquam quasi rem fuga ratione hic sapiente, minima a.",
    buttonTitle: "Read More",
    backgroundColor: "#4791DB"
},
{
    date: "2020-06-28T12:37:05.637Z",
    title: "The best way to consume React-Bootstrap is via the npm package.",
    paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla libero cum illum neque voluptas sequi omnis expedita voluptate porro repudiandae aliquam quasi rem fuga ratione hic sapiente, minima a.",
    buttonTitle: "Read More",
    backgroundColor: "#E33371"
},
{
    date: "2020-02-15T12:37:05.637Z",
    title: "Doing so pulls in only the specific components that you use.",
    paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla libero cum illum neque voluptas sequi omnis expedita voluptate porro repudiandae aliquam quasi rem fuga ratione hic sapiente, minima a.",
    buttonTitle: "Read More",
    backgroundColor: "#FF9800"
},
{
    date: "2020-02-17T12:37:05.637Z",
    title: "Love of learning, art keys to a great year of Gwen",
    paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla libero cum illum neque voluptas sequi omnis expedita voluptate porro repudiandae aliquam quasi rem fuga ratione hic sapiente, minima a.",
    buttonTitle: "Read More",
    backgroundColor: "#388E3C"
},
{
    date: "2020-12-10T12:37:05.637Z",
    title: "Love of learning, art keys to a great year of Gwen",
    paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla libero cum illum neque voluptas sequi omnis expedita voluptate porro repudiandae aliquam quasi rem fuga ratione hic sapiente, minima a.",
    buttonTitle: "Read More",
    backgroundColor: "#9A0036"
},
{
    date: "2020-03-03T12:37:05.637Z",
    title: "Which can significantly reduce the amount of code.",
    paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla libero cum illum neque voluptas sequi omnis expedita voluptate porro repudiandae aliquam quasi rem fuga ratione hic sapiente, minima a.",
    buttonTitle: "Read More",
    backgroundColor: "#115293"
},
{
    date: "2020-03-12T12:37:05.637Z",
    title: "These bundles are available on unpkg, as well as in the npm package.",
    paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla libero cum illum neque voluptas sequi omnis expedita voluptate porro repudiandae aliquam quasi rem fuga ratione hic sapiente, minima a.",
    buttonTitle: "Read More",
    backgroundColor: "#4791DB"
},
{
    date: "2020-06-28T12:37:05.637Z",
    title: "Love of learning, art keys to a great year of Gwen",
    paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla libero cum illum neque voluptas sequi omnis expedita voluptate porro repudiandae aliquam quasi rem fuga ratione hic sapiente, minima a.",
    buttonTitle: "Read More",
    backgroundColor: "#E33371"
},
{
    date: "2020-06-28T12:37:05.637Z",
    title: "React-Bootstrap has started a repo with a few basic CodeSandbox examples.",
    paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla libero cum illum neque voluptas sequi omnis expedita voluptate porro repudiandae aliquam quasi rem fuga ratione hic sapiente, minima a.",
    buttonTitle: "Read More",
    backgroundColor: "#E33371"
}
];

export const getRelatedArticlesApi = async () => {
    const response = {
        data: relatedArticles
    }
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(response);
        }, 1000)
    })
};
