import { QuartzTransformerPlugin } from "../types"
import { Root } from "hast"
import { visit } from "unist-util-visit"

interface CardData {
  name: any
  link: any
  image: any
  color: string
}

export const CategoryPage: QuartzTransformerPlugin = () => {
  return {
    name: "CategoryPage",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root, _file) => {
            visit(tree, "element", (node: any, index, parent) => {
              if (!(node.tagName === "blockquote" && parent && index !== undefined)) return
              if (
                !(
                  node.properties.className.includes("callout") &&
                  node.properties.dataCallout &&
                  node.properties.dataCallout.includes("category")
                )
              )
                return

              let dataArray: any = []
              // Extract data from table and populate with cards
              visit(node, "element", (node: any) => {
                if (node.tagName !== "tbody") return
                for (const [trIndex, trValue] of node.children.entries()) {
                  if (trValue.tagName !== "tr") continue

                  // Data extraction
                  let ReturnCardData = {} as CardData
                  ReturnCardData.name = trValue.children[0]?.children[0]
                  ReturnCardData.link = trValue.children[1]?.children[0]
                  ReturnCardData.color = trValue.children[2]?.children[0]?.value
                  // Assumes Lightbox Modal. Extracts Non-Modal Image
                  // Create Image Class
                  const originalImage = trValue.children[3].children[0].children[0]
                  const newImage = {
                    type: "element",
                    tagName: "img",
                    properties: {
                      src: originalImage.properties.src,
                      width: originalImage.width,
                      height: originalImage.height,
                      alt: originalImage.alt,
                      loading: originalImage.loading,
                      className: ["card-illustration"],
                      "data-index": trIndex,
                    },
                    children: [],
                  }
                  ReturnCardData.image = newImage

                  // Card obj
                  const Card = structuredClone(ReturnCardData.link)
                  delete Card.position
                  console.log(trValue.children[0])
                  Card.children = [
                    {
                      type: "element",
                      tagName: "div",
                      properties: {
                        className: ["card"],
                        "data-color": ReturnCardData.color,
                      },
                      children: [
                        {
                          type: "element",
                          tagName: "p",
                          properties: {
                            className: ["card-title"],
                          },
                          children: [ReturnCardData.name],
                        },
                        ReturnCardData.image,
                      ],
                    },
                  ]

                  dataArray.push(Card)
                }
              })

              // Create wrapper div
              const CategoryWrapper = {
                type: "element",
                tagName: "div",
                properties: {
                  className: ["category-container"],
                },
                children: dataArray,
              }

              parent.children[index] = CategoryWrapper
            })
          }
        },
      ]
    },
  }
}
