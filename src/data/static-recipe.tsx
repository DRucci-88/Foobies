// INTERSECTION

export interface HomeRecipe{
  label: string,
  image: string
}

export interface HomeLink{
  href: string,
}

export interface HomeLinks{
  self: HomeLink
}

export interface HomeHit{
  recipe: HomeRecipe
  _links: HomeLinks
}
