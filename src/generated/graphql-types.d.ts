export type Maybe<T> = T | null
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>
  lossless?: Maybe<Scalars['Boolean']>
  speed?: Maybe<Scalars['Int']>
}

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type ContentfulAsset = Node & {
  __typename?: 'ContentfulAsset'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  contentful_id?: Maybe<Scalars['String']>
  spaceId?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  file?: Maybe<ContentfulAssetFile>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  node_locale?: Maybe<Scalars['String']>
  sys?: Maybe<ContentfulAssetSys>
  fixed?: Maybe<ContentfulFixed>
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>
  fluid?: Maybe<ContentfulFluid>
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>
  resize?: Maybe<ContentfulResize>
}

export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ContentfulImageFormat>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
  sizes?: Maybe<Scalars['String']>
}

export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  resizingBehavior?: Maybe<ImageResizingBehavior>
  toFormat?: Maybe<ContentfulImageFormat>
  cropFocus?: Maybe<ContentfulImageCropFocus>
  background?: Maybe<Scalars['String']>
}

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulAssetGroupConnection>
}

export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulAssetFieldsEnum
}

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge'
  next?: Maybe<ContentfulAsset>
  node: ContentfulAsset
  previous?: Maybe<ContentfulAsset>
}

export type ContentfulAssetFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile'
  url?: Maybe<Scalars['String']>
  details?: Maybe<ContentfulAssetFileDetails>
  fileName?: Maybe<Scalars['String']>
  contentType?: Maybe<Scalars['String']>
}

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails'
  size?: Maybe<Scalars['Int']>
  image?: Maybe<ContentfulAssetFileDetailsImage>
}

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>
}

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage'
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
}

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
}

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>
  fileName?: Maybe<StringQueryOperatorInput>
  contentType?: Maybe<StringQueryOperatorInput>
}

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulAssetSysFilterInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  resolutions?: Maybe<ContentfulResolutionsFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  sizes?: Maybe<ContentfulSizesFilterInput>
  resize?: Maybe<ContentfulResizeFilterInput>
}

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulAssetEdge>
  nodes: Array<ContentfulAsset>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulAssetSys = {
  __typename?: 'ContentfulAssetSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
}

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
}

export type ContentfulBlogPost = Node & {
  __typename?: 'ContentfulBlogPost'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
  publishedDate?: Maybe<Scalars['Date']>
  image?: Maybe<ContentfulAsset>
  bodyContent?: Maybe<ContentfulBlogPostBodyContentTextNode>
  spaceId?: Maybe<Scalars['String']>
  contentful_id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  sys?: Maybe<ContentfulBlogPostSys>
  node_locale?: Maybe<Scalars['String']>
  /** Returns all children nodes filtered by type contentfulBlogPostBodyContentTextNode */
  childrenContentfulBlogPostBodyContentTextNode?: Maybe<
    Array<Maybe<ContentfulBlogPostBodyContentTextNode>>
  >
  /**
   * Returns the first child node of type contentfulBlogPostBodyContentTextNode or
   * null if there are no children of given type on this node
   */
  childContentfulBlogPostBodyContentTextNode?: Maybe<ContentfulBlogPostBodyContentTextNode>
}

export type ContentfulBlogPostPublishedDateArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulBlogPostBodyContentTextNode = Node & {
  __typename?: 'contentfulBlogPostBodyContentTextNode'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  bodyContent?: Maybe<Scalars['String']>
  sys?: Maybe<ContentfulBlogPostBodyContentTextNodeSys>
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>
}

export type ContentfulBlogPostBodyContentTextNodeConnection = {
  __typename?: 'contentfulBlogPostBodyContentTextNodeConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulBlogPostBodyContentTextNodeEdge>
  nodes: Array<ContentfulBlogPostBodyContentTextNode>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulBlogPostBodyContentTextNodeGroupConnection>
}

export type ContentfulBlogPostBodyContentTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBodyContentTextNodeFieldsEnum
}

export type ContentfulBlogPostBodyContentTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulBlogPostBodyContentTextNodeFieldsEnum
}

export type ContentfulBlogPostBodyContentTextNodeEdge = {
  __typename?: 'contentfulBlogPostBodyContentTextNodeEdge'
  next?: Maybe<ContentfulBlogPostBodyContentTextNode>
  node: ContentfulBlogPostBodyContentTextNode
  previous?: Maybe<ContentfulBlogPostBodyContentTextNode>
}

export type ContentfulBlogPostBodyContentTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'bodyContent'
  | 'sys___type'
  | 'childrenMarkdownRemark'
  | 'childrenMarkdownRemark___id'
  | 'childrenMarkdownRemark___frontmatter___title'
  | 'childrenMarkdownRemark___excerpt'
  | 'childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenMarkdownRemark___html'
  | 'childrenMarkdownRemark___htmlAst'
  | 'childrenMarkdownRemark___excerptAst'
  | 'childrenMarkdownRemark___headings'
  | 'childrenMarkdownRemark___headings___id'
  | 'childrenMarkdownRemark___headings___value'
  | 'childrenMarkdownRemark___headings___depth'
  | 'childrenMarkdownRemark___timeToRead'
  | 'childrenMarkdownRemark___tableOfContents'
  | 'childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenMarkdownRemark___wordCount___sentences'
  | 'childrenMarkdownRemark___wordCount___words'
  | 'childrenMarkdownRemark___parent___id'
  | 'childrenMarkdownRemark___parent___parent___id'
  | 'childrenMarkdownRemark___parent___parent___children'
  | 'childrenMarkdownRemark___parent___children'
  | 'childrenMarkdownRemark___parent___children___id'
  | 'childrenMarkdownRemark___parent___children___children'
  | 'childrenMarkdownRemark___parent___internal___content'
  | 'childrenMarkdownRemark___parent___internal___contentDigest'
  | 'childrenMarkdownRemark___parent___internal___description'
  | 'childrenMarkdownRemark___parent___internal___fieldOwners'
  | 'childrenMarkdownRemark___parent___internal___ignoreType'
  | 'childrenMarkdownRemark___parent___internal___mediaType'
  | 'childrenMarkdownRemark___parent___internal___owner'
  | 'childrenMarkdownRemark___parent___internal___type'
  | 'childrenMarkdownRemark___children'
  | 'childrenMarkdownRemark___children___id'
  | 'childrenMarkdownRemark___children___parent___id'
  | 'childrenMarkdownRemark___children___parent___children'
  | 'childrenMarkdownRemark___children___children'
  | 'childrenMarkdownRemark___children___children___id'
  | 'childrenMarkdownRemark___children___children___children'
  | 'childrenMarkdownRemark___children___internal___content'
  | 'childrenMarkdownRemark___children___internal___contentDigest'
  | 'childrenMarkdownRemark___children___internal___description'
  | 'childrenMarkdownRemark___children___internal___fieldOwners'
  | 'childrenMarkdownRemark___children___internal___ignoreType'
  | 'childrenMarkdownRemark___children___internal___mediaType'
  | 'childrenMarkdownRemark___children___internal___owner'
  | 'childrenMarkdownRemark___children___internal___type'
  | 'childrenMarkdownRemark___internal___content'
  | 'childrenMarkdownRemark___internal___contentDigest'
  | 'childrenMarkdownRemark___internal___description'
  | 'childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenMarkdownRemark___internal___ignoreType'
  | 'childrenMarkdownRemark___internal___mediaType'
  | 'childrenMarkdownRemark___internal___owner'
  | 'childrenMarkdownRemark___internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type'

export type ContentfulBlogPostBodyContentTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  bodyContent?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulBlogPostBodyContentTextNodeSysFilterInput>
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
}

export type ContentfulBlogPostBodyContentTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostBodyContentTextNodeFilterInput>
}

export type ContentfulBlogPostBodyContentTextNodeGroupConnection = {
  __typename?: 'contentfulBlogPostBodyContentTextNodeGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulBlogPostBodyContentTextNodeEdge>
  nodes: Array<ContentfulBlogPostBodyContentTextNode>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulBlogPostBodyContentTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBodyContentTextNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulBlogPostBodyContentTextNodeSys = {
  __typename?: 'contentfulBlogPostBodyContentTextNodeSys'
  type?: Maybe<Scalars['String']>
}

export type ContentfulBlogPostBodyContentTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulBlogPostConnection = {
  __typename?: 'ContentfulBlogPostConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulBlogPostEdge>
  nodes: Array<ContentfulBlogPost>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulBlogPostGroupConnection>
}

export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum
}

export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulBlogPostFieldsEnum
}

export type ContentfulBlogPostEdge = {
  __typename?: 'ContentfulBlogPostEdge'
  next?: Maybe<ContentfulBlogPost>
  node: ContentfulBlogPost
  previous?: Maybe<ContentfulBlogPost>
}

export type ContentfulBlogPostFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'slug'
  | 'publishedDate'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'image___contentful_id'
  | 'image___spaceId'
  | 'image___createdAt'
  | 'image___updatedAt'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___sys___type'
  | 'image___sys___revision'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___resolutions___base64'
  | 'image___resolutions___tracedSVG'
  | 'image___resolutions___aspectRatio'
  | 'image___resolutions___width'
  | 'image___resolutions___height'
  | 'image___resolutions___src'
  | 'image___resolutions___srcSet'
  | 'image___resolutions___srcWebp'
  | 'image___resolutions___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___sizes___base64'
  | 'image___sizes___tracedSVG'
  | 'image___sizes___aspectRatio'
  | 'image___sizes___src'
  | 'image___sizes___srcSet'
  | 'image___sizes___srcWebp'
  | 'image___sizes___srcSetWebp'
  | 'image___sizes___sizes'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'bodyContent___id'
  | 'bodyContent___parent___id'
  | 'bodyContent___parent___parent___id'
  | 'bodyContent___parent___parent___children'
  | 'bodyContent___parent___children'
  | 'bodyContent___parent___children___id'
  | 'bodyContent___parent___children___children'
  | 'bodyContent___parent___internal___content'
  | 'bodyContent___parent___internal___contentDigest'
  | 'bodyContent___parent___internal___description'
  | 'bodyContent___parent___internal___fieldOwners'
  | 'bodyContent___parent___internal___ignoreType'
  | 'bodyContent___parent___internal___mediaType'
  | 'bodyContent___parent___internal___owner'
  | 'bodyContent___parent___internal___type'
  | 'bodyContent___children'
  | 'bodyContent___children___id'
  | 'bodyContent___children___parent___id'
  | 'bodyContent___children___parent___children'
  | 'bodyContent___children___children'
  | 'bodyContent___children___children___id'
  | 'bodyContent___children___children___children'
  | 'bodyContent___children___internal___content'
  | 'bodyContent___children___internal___contentDigest'
  | 'bodyContent___children___internal___description'
  | 'bodyContent___children___internal___fieldOwners'
  | 'bodyContent___children___internal___ignoreType'
  | 'bodyContent___children___internal___mediaType'
  | 'bodyContent___children___internal___owner'
  | 'bodyContent___children___internal___type'
  | 'bodyContent___internal___content'
  | 'bodyContent___internal___contentDigest'
  | 'bodyContent___internal___description'
  | 'bodyContent___internal___fieldOwners'
  | 'bodyContent___internal___ignoreType'
  | 'bodyContent___internal___mediaType'
  | 'bodyContent___internal___owner'
  | 'bodyContent___internal___type'
  | 'bodyContent___bodyContent'
  | 'bodyContent___sys___type'
  | 'bodyContent___childrenMarkdownRemark'
  | 'bodyContent___childrenMarkdownRemark___id'
  | 'bodyContent___childrenMarkdownRemark___frontmatter___title'
  | 'bodyContent___childrenMarkdownRemark___excerpt'
  | 'bodyContent___childrenMarkdownRemark___rawMarkdownBody'
  | 'bodyContent___childrenMarkdownRemark___html'
  | 'bodyContent___childrenMarkdownRemark___htmlAst'
  | 'bodyContent___childrenMarkdownRemark___excerptAst'
  | 'bodyContent___childrenMarkdownRemark___headings'
  | 'bodyContent___childrenMarkdownRemark___headings___id'
  | 'bodyContent___childrenMarkdownRemark___headings___value'
  | 'bodyContent___childrenMarkdownRemark___headings___depth'
  | 'bodyContent___childrenMarkdownRemark___timeToRead'
  | 'bodyContent___childrenMarkdownRemark___tableOfContents'
  | 'bodyContent___childrenMarkdownRemark___wordCount___paragraphs'
  | 'bodyContent___childrenMarkdownRemark___wordCount___sentences'
  | 'bodyContent___childrenMarkdownRemark___wordCount___words'
  | 'bodyContent___childrenMarkdownRemark___parent___id'
  | 'bodyContent___childrenMarkdownRemark___parent___children'
  | 'bodyContent___childrenMarkdownRemark___children'
  | 'bodyContent___childrenMarkdownRemark___children___id'
  | 'bodyContent___childrenMarkdownRemark___children___children'
  | 'bodyContent___childrenMarkdownRemark___internal___content'
  | 'bodyContent___childrenMarkdownRemark___internal___contentDigest'
  | 'bodyContent___childrenMarkdownRemark___internal___description'
  | 'bodyContent___childrenMarkdownRemark___internal___fieldOwners'
  | 'bodyContent___childrenMarkdownRemark___internal___ignoreType'
  | 'bodyContent___childrenMarkdownRemark___internal___mediaType'
  | 'bodyContent___childrenMarkdownRemark___internal___owner'
  | 'bodyContent___childrenMarkdownRemark___internal___type'
  | 'bodyContent___childMarkdownRemark___id'
  | 'bodyContent___childMarkdownRemark___frontmatter___title'
  | 'bodyContent___childMarkdownRemark___excerpt'
  | 'bodyContent___childMarkdownRemark___rawMarkdownBody'
  | 'bodyContent___childMarkdownRemark___html'
  | 'bodyContent___childMarkdownRemark___htmlAst'
  | 'bodyContent___childMarkdownRemark___excerptAst'
  | 'bodyContent___childMarkdownRemark___headings'
  | 'bodyContent___childMarkdownRemark___headings___id'
  | 'bodyContent___childMarkdownRemark___headings___value'
  | 'bodyContent___childMarkdownRemark___headings___depth'
  | 'bodyContent___childMarkdownRemark___timeToRead'
  | 'bodyContent___childMarkdownRemark___tableOfContents'
  | 'bodyContent___childMarkdownRemark___wordCount___paragraphs'
  | 'bodyContent___childMarkdownRemark___wordCount___sentences'
  | 'bodyContent___childMarkdownRemark___wordCount___words'
  | 'bodyContent___childMarkdownRemark___parent___id'
  | 'bodyContent___childMarkdownRemark___parent___children'
  | 'bodyContent___childMarkdownRemark___children'
  | 'bodyContent___childMarkdownRemark___children___id'
  | 'bodyContent___childMarkdownRemark___children___children'
  | 'bodyContent___childMarkdownRemark___internal___content'
  | 'bodyContent___childMarkdownRemark___internal___contentDigest'
  | 'bodyContent___childMarkdownRemark___internal___description'
  | 'bodyContent___childMarkdownRemark___internal___fieldOwners'
  | 'bodyContent___childMarkdownRemark___internal___ignoreType'
  | 'bodyContent___childMarkdownRemark___internal___mediaType'
  | 'bodyContent___childMarkdownRemark___internal___owner'
  | 'bodyContent___childMarkdownRemark___internal___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'node_locale'
  | 'childrenContentfulBlogPostBodyContentTextNode'
  | 'childrenContentfulBlogPostBodyContentTextNode___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___parent___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___parent___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___children___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___children___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___internal___content'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___internal___contentDigest'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___internal___description'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___internal___ignoreType'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___internal___mediaType'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___internal___owner'
  | 'childrenContentfulBlogPostBodyContentTextNode___parent___internal___type'
  | 'childrenContentfulBlogPostBodyContentTextNode___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___parent___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___parent___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___children___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___children___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___internal___content'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___internal___contentDigest'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___internal___description'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___internal___fieldOwners'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___internal___ignoreType'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___internal___mediaType'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___internal___owner'
  | 'childrenContentfulBlogPostBodyContentTextNode___children___internal___type'
  | 'childrenContentfulBlogPostBodyContentTextNode___internal___content'
  | 'childrenContentfulBlogPostBodyContentTextNode___internal___contentDigest'
  | 'childrenContentfulBlogPostBodyContentTextNode___internal___description'
  | 'childrenContentfulBlogPostBodyContentTextNode___internal___fieldOwners'
  | 'childrenContentfulBlogPostBodyContentTextNode___internal___ignoreType'
  | 'childrenContentfulBlogPostBodyContentTextNode___internal___mediaType'
  | 'childrenContentfulBlogPostBodyContentTextNode___internal___owner'
  | 'childrenContentfulBlogPostBodyContentTextNode___internal___type'
  | 'childrenContentfulBlogPostBodyContentTextNode___bodyContent'
  | 'childrenContentfulBlogPostBodyContentTextNode___sys___type'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___frontmatter___title'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___excerpt'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___rawMarkdownBody'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___html'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___htmlAst'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___excerptAst'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___headings'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___headings___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___headings___value'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___headings___depth'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___timeToRead'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___tableOfContents'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___wordCount___paragraphs'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___wordCount___sentences'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___wordCount___words'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___parent___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___parent___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___children___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___children___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___content'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___contentDigest'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___description'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___fieldOwners'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___ignoreType'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___mediaType'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___owner'
  | 'childrenContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___type'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___frontmatter___title'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___excerpt'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___html'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___htmlAst'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___excerptAst'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___headings'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___headings___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___headings___value'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___headings___depth'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___timeToRead'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___tableOfContents'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___wordCount___words'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___parent___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___parent___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___children___id'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___children___children'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___content'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___description'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___mediaType'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___owner'
  | 'childrenContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___type'
  | 'childContentfulBlogPostBodyContentTextNode___id'
  | 'childContentfulBlogPostBodyContentTextNode___parent___id'
  | 'childContentfulBlogPostBodyContentTextNode___parent___parent___id'
  | 'childContentfulBlogPostBodyContentTextNode___parent___parent___children'
  | 'childContentfulBlogPostBodyContentTextNode___parent___children'
  | 'childContentfulBlogPostBodyContentTextNode___parent___children___id'
  | 'childContentfulBlogPostBodyContentTextNode___parent___children___children'
  | 'childContentfulBlogPostBodyContentTextNode___parent___internal___content'
  | 'childContentfulBlogPostBodyContentTextNode___parent___internal___contentDigest'
  | 'childContentfulBlogPostBodyContentTextNode___parent___internal___description'
  | 'childContentfulBlogPostBodyContentTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlogPostBodyContentTextNode___parent___internal___ignoreType'
  | 'childContentfulBlogPostBodyContentTextNode___parent___internal___mediaType'
  | 'childContentfulBlogPostBodyContentTextNode___parent___internal___owner'
  | 'childContentfulBlogPostBodyContentTextNode___parent___internal___type'
  | 'childContentfulBlogPostBodyContentTextNode___children'
  | 'childContentfulBlogPostBodyContentTextNode___children___id'
  | 'childContentfulBlogPostBodyContentTextNode___children___parent___id'
  | 'childContentfulBlogPostBodyContentTextNode___children___parent___children'
  | 'childContentfulBlogPostBodyContentTextNode___children___children'
  | 'childContentfulBlogPostBodyContentTextNode___children___children___id'
  | 'childContentfulBlogPostBodyContentTextNode___children___children___children'
  | 'childContentfulBlogPostBodyContentTextNode___children___internal___content'
  | 'childContentfulBlogPostBodyContentTextNode___children___internal___contentDigest'
  | 'childContentfulBlogPostBodyContentTextNode___children___internal___description'
  | 'childContentfulBlogPostBodyContentTextNode___children___internal___fieldOwners'
  | 'childContentfulBlogPostBodyContentTextNode___children___internal___ignoreType'
  | 'childContentfulBlogPostBodyContentTextNode___children___internal___mediaType'
  | 'childContentfulBlogPostBodyContentTextNode___children___internal___owner'
  | 'childContentfulBlogPostBodyContentTextNode___children___internal___type'
  | 'childContentfulBlogPostBodyContentTextNode___internal___content'
  | 'childContentfulBlogPostBodyContentTextNode___internal___contentDigest'
  | 'childContentfulBlogPostBodyContentTextNode___internal___description'
  | 'childContentfulBlogPostBodyContentTextNode___internal___fieldOwners'
  | 'childContentfulBlogPostBodyContentTextNode___internal___ignoreType'
  | 'childContentfulBlogPostBodyContentTextNode___internal___mediaType'
  | 'childContentfulBlogPostBodyContentTextNode___internal___owner'
  | 'childContentfulBlogPostBodyContentTextNode___internal___type'
  | 'childContentfulBlogPostBodyContentTextNode___bodyContent'
  | 'childContentfulBlogPostBodyContentTextNode___sys___type'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___id'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___frontmatter___title'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___excerpt'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___rawMarkdownBody'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___html'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___htmlAst'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___excerptAst'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___headings'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___headings___id'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___headings___value'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___headings___depth'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___timeToRead'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___tableOfContents'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___wordCount___sentences'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___wordCount___words'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___parent___id'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___parent___children'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___children'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___children___id'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___children___children'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___content'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___contentDigest'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___description'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___fieldOwners'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___ignoreType'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___mediaType'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___owner'
  | 'childContentfulBlogPostBodyContentTextNode___childrenMarkdownRemark___internal___type'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___id'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___frontmatter___title'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___excerpt'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___rawMarkdownBody'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___html'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___htmlAst'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___excerptAst'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___headings'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___headings___id'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___headings___value'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___headings___depth'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___timeToRead'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___tableOfContents'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___wordCount___paragraphs'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___wordCount___sentences'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___wordCount___words'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___parent___id'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___parent___children'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___children'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___children___id'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___children___children'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___content'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___contentDigest'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___description'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___fieldOwners'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___ignoreType'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___mediaType'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___owner'
  | 'childContentfulBlogPostBodyContentTextNode___childMarkdownRemark___internal___type'

export type ContentfulBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  publishedDate?: Maybe<DateQueryOperatorInput>
  image?: Maybe<ContentfulAssetFilterInput>
  bodyContent?: Maybe<ContentfulBlogPostBodyContentTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulBlogPostSysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  childrenContentfulBlogPostBodyContentTextNode?: Maybe<ContentfulBlogPostBodyContentTextNodeFilterListInput>
  childContentfulBlogPostBodyContentTextNode?: Maybe<ContentfulBlogPostBodyContentTextNodeFilterInput>
}

export type ContentfulBlogPostGroupConnection = {
  __typename?: 'ContentfulBlogPostGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulBlogPostEdge>
  nodes: Array<ContentfulBlogPost>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulBlogPostSys = {
  __typename?: 'ContentfulBlogPostSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulBlogPostSysContentType>
}

export type ContentfulBlogPostSysContentType = {
  __typename?: 'ContentfulBlogPostSysContentType'
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>
}

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>
}

export type ContentfulBlogPostSysContentTypeSys = {
  __typename?: 'ContentfulBlogPostSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulBlogPostSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>
}

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  name?: Maybe<Scalars['String']>
  displayField?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  sys?: Maybe<ContentfulContentTypeSys>
}

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulContentTypeGroupConnection>
}

export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulContentTypeFieldsEnum
}

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge'
  next?: Maybe<ContentfulContentType>
  node: ContentfulContentType
  previous?: Maybe<ContentfulContentType>
}

export type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys___type'

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulContentTypeSysFilterInput>
}

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulContentTypeEdge>
  nodes: Array<ContentfulContentType>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulContentTypeSys = {
  __typename?: 'ContentfulContentTypeSys'
  type?: Maybe<Scalars['String']>
}

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
}

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER'

export type ContentfulImageFormat = 'NO_CHANGE' | 'JPG' | 'PNG' | 'WEBP'

export type ContentfulResize = {
  __typename?: 'ContentfulResize'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  src?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
}

export type ContentfulResolutions = {
  __typename?: 'ContentfulResolutions'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
}

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSizes = {
  __typename?: 'ContentfulSizes'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
}

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSkills = Node & {
  __typename?: 'ContentfulSkills'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  skillsItem?: Maybe<ContentfulSkillsSkillsItemJsonNode>
  spaceId?: Maybe<Scalars['String']>
  contentful_id?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['Date']>
  updatedAt?: Maybe<Scalars['Date']>
  sys?: Maybe<ContentfulSkillsSys>
  node_locale?: Maybe<Scalars['String']>
  /** Returns all children nodes filtered by type contentfulSkillsSkillsItemJsonNode */
  childrenContentfulSkillsSkillsItemJsonNode?: Maybe<
    Array<Maybe<ContentfulSkillsSkillsItemJsonNode>>
  >
  /**
   * Returns the first child node of type contentfulSkillsSkillsItemJsonNode or
   * null if there are no children of given type on this node
   */
  childContentfulSkillsSkillsItemJsonNode?: Maybe<ContentfulSkillsSkillsItemJsonNode>
}

export type ContentfulSkillsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulSkillsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type ContentfulSkillsConnection = {
  __typename?: 'ContentfulSkillsConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulSkillsEdge>
  nodes: Array<ContentfulSkills>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulSkillsGroupConnection>
}

export type ContentfulSkillsConnectionDistinctArgs = {
  field: ContentfulSkillsFieldsEnum
}

export type ContentfulSkillsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulSkillsFieldsEnum
}

export type ContentfulSkillsEdge = {
  __typename?: 'ContentfulSkillsEdge'
  next?: Maybe<ContentfulSkills>
  node: ContentfulSkills
  previous?: Maybe<ContentfulSkills>
}

export type ContentfulSkillsFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'skillsItem___id'
  | 'skillsItem___parent___id'
  | 'skillsItem___parent___parent___id'
  | 'skillsItem___parent___parent___children'
  | 'skillsItem___parent___children'
  | 'skillsItem___parent___children___id'
  | 'skillsItem___parent___children___children'
  | 'skillsItem___parent___internal___content'
  | 'skillsItem___parent___internal___contentDigest'
  | 'skillsItem___parent___internal___description'
  | 'skillsItem___parent___internal___fieldOwners'
  | 'skillsItem___parent___internal___ignoreType'
  | 'skillsItem___parent___internal___mediaType'
  | 'skillsItem___parent___internal___owner'
  | 'skillsItem___parent___internal___type'
  | 'skillsItem___children'
  | 'skillsItem___children___id'
  | 'skillsItem___children___parent___id'
  | 'skillsItem___children___parent___children'
  | 'skillsItem___children___children'
  | 'skillsItem___children___children___id'
  | 'skillsItem___children___children___children'
  | 'skillsItem___children___internal___content'
  | 'skillsItem___children___internal___contentDigest'
  | 'skillsItem___children___internal___description'
  | 'skillsItem___children___internal___fieldOwners'
  | 'skillsItem___children___internal___ignoreType'
  | 'skillsItem___children___internal___mediaType'
  | 'skillsItem___children___internal___owner'
  | 'skillsItem___children___internal___type'
  | 'skillsItem___internal___content'
  | 'skillsItem___internal___contentDigest'
  | 'skillsItem___internal___description'
  | 'skillsItem___internal___fieldOwners'
  | 'skillsItem___internal___ignoreType'
  | 'skillsItem___internal___mediaType'
  | 'skillsItem___internal___owner'
  | 'skillsItem___internal___type'
  | 'skillsItem___aboutMe'
  | 'skillsItem___skills1'
  | 'skillsItem___skills2'
  | 'skillsItem___skills3'
  | 'skillsItem___sys___type'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'node_locale'
  | 'childrenContentfulSkillsSkillsItemJsonNode'
  | 'childrenContentfulSkillsSkillsItemJsonNode___id'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___id'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___parent___id'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___parent___children'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___children'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___children___id'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___children___children'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___internal___content'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___internal___contentDigest'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___internal___description'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___internal___fieldOwners'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___internal___ignoreType'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___internal___mediaType'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___internal___owner'
  | 'childrenContentfulSkillsSkillsItemJsonNode___parent___internal___type'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___id'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___parent___id'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___parent___children'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___children'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___children___id'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___children___children'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___internal___content'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___internal___contentDigest'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___internal___description'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___internal___fieldOwners'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___internal___ignoreType'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___internal___mediaType'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___internal___owner'
  | 'childrenContentfulSkillsSkillsItemJsonNode___children___internal___type'
  | 'childrenContentfulSkillsSkillsItemJsonNode___internal___content'
  | 'childrenContentfulSkillsSkillsItemJsonNode___internal___contentDigest'
  | 'childrenContentfulSkillsSkillsItemJsonNode___internal___description'
  | 'childrenContentfulSkillsSkillsItemJsonNode___internal___fieldOwners'
  | 'childrenContentfulSkillsSkillsItemJsonNode___internal___ignoreType'
  | 'childrenContentfulSkillsSkillsItemJsonNode___internal___mediaType'
  | 'childrenContentfulSkillsSkillsItemJsonNode___internal___owner'
  | 'childrenContentfulSkillsSkillsItemJsonNode___internal___type'
  | 'childrenContentfulSkillsSkillsItemJsonNode___aboutMe'
  | 'childrenContentfulSkillsSkillsItemJsonNode___skills1'
  | 'childrenContentfulSkillsSkillsItemJsonNode___skills2'
  | 'childrenContentfulSkillsSkillsItemJsonNode___skills3'
  | 'childrenContentfulSkillsSkillsItemJsonNode___sys___type'
  | 'childContentfulSkillsSkillsItemJsonNode___id'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___id'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___parent___id'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___parent___children'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___children'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___children___id'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___children___children'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___internal___content'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___internal___contentDigest'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___internal___description'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___internal___fieldOwners'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___internal___ignoreType'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___internal___mediaType'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___internal___owner'
  | 'childContentfulSkillsSkillsItemJsonNode___parent___internal___type'
  | 'childContentfulSkillsSkillsItemJsonNode___children'
  | 'childContentfulSkillsSkillsItemJsonNode___children___id'
  | 'childContentfulSkillsSkillsItemJsonNode___children___parent___id'
  | 'childContentfulSkillsSkillsItemJsonNode___children___parent___children'
  | 'childContentfulSkillsSkillsItemJsonNode___children___children'
  | 'childContentfulSkillsSkillsItemJsonNode___children___children___id'
  | 'childContentfulSkillsSkillsItemJsonNode___children___children___children'
  | 'childContentfulSkillsSkillsItemJsonNode___children___internal___content'
  | 'childContentfulSkillsSkillsItemJsonNode___children___internal___contentDigest'
  | 'childContentfulSkillsSkillsItemJsonNode___children___internal___description'
  | 'childContentfulSkillsSkillsItemJsonNode___children___internal___fieldOwners'
  | 'childContentfulSkillsSkillsItemJsonNode___children___internal___ignoreType'
  | 'childContentfulSkillsSkillsItemJsonNode___children___internal___mediaType'
  | 'childContentfulSkillsSkillsItemJsonNode___children___internal___owner'
  | 'childContentfulSkillsSkillsItemJsonNode___children___internal___type'
  | 'childContentfulSkillsSkillsItemJsonNode___internal___content'
  | 'childContentfulSkillsSkillsItemJsonNode___internal___contentDigest'
  | 'childContentfulSkillsSkillsItemJsonNode___internal___description'
  | 'childContentfulSkillsSkillsItemJsonNode___internal___fieldOwners'
  | 'childContentfulSkillsSkillsItemJsonNode___internal___ignoreType'
  | 'childContentfulSkillsSkillsItemJsonNode___internal___mediaType'
  | 'childContentfulSkillsSkillsItemJsonNode___internal___owner'
  | 'childContentfulSkillsSkillsItemJsonNode___internal___type'
  | 'childContentfulSkillsSkillsItemJsonNode___aboutMe'
  | 'childContentfulSkillsSkillsItemJsonNode___skills1'
  | 'childContentfulSkillsSkillsItemJsonNode___skills2'
  | 'childContentfulSkillsSkillsItemJsonNode___skills3'
  | 'childContentfulSkillsSkillsItemJsonNode___sys___type'

export type ContentfulSkillsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  skillsItem?: Maybe<ContentfulSkillsSkillsItemJsonNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulSkillsSysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  childrenContentfulSkillsSkillsItemJsonNode?: Maybe<ContentfulSkillsSkillsItemJsonNodeFilterListInput>
  childContentfulSkillsSkillsItemJsonNode?: Maybe<ContentfulSkillsSkillsItemJsonNodeFilterInput>
}

export type ContentfulSkillsGroupConnection = {
  __typename?: 'ContentfulSkillsGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulSkillsEdge>
  nodes: Array<ContentfulSkills>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulSkillsSkillsItemJsonNode = Node & {
  __typename?: 'contentfulSkillsSkillsItemJsonNode'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  aboutMe?: Maybe<Scalars['String']>
  skills1?: Maybe<Array<Maybe<Scalars['String']>>>
  skills2?: Maybe<Array<Maybe<Scalars['String']>>>
  skills3?: Maybe<Array<Maybe<Scalars['String']>>>
  sys?: Maybe<ContentfulSkillsSkillsItemJsonNodeSys>
}

export type ContentfulSkillsSkillsItemJsonNodeConnection = {
  __typename?: 'contentfulSkillsSkillsItemJsonNodeConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulSkillsSkillsItemJsonNodeEdge>
  nodes: Array<ContentfulSkillsSkillsItemJsonNode>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ContentfulSkillsSkillsItemJsonNodeGroupConnection>
}

export type ContentfulSkillsSkillsItemJsonNodeConnectionDistinctArgs = {
  field: ContentfulSkillsSkillsItemJsonNodeFieldsEnum
}

export type ContentfulSkillsSkillsItemJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ContentfulSkillsSkillsItemJsonNodeFieldsEnum
}

export type ContentfulSkillsSkillsItemJsonNodeEdge = {
  __typename?: 'contentfulSkillsSkillsItemJsonNodeEdge'
  next?: Maybe<ContentfulSkillsSkillsItemJsonNode>
  node: ContentfulSkillsSkillsItemJsonNode
  previous?: Maybe<ContentfulSkillsSkillsItemJsonNode>
}

export type ContentfulSkillsSkillsItemJsonNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'aboutMe'
  | 'skills1'
  | 'skills2'
  | 'skills3'
  | 'sys___type'

export type ContentfulSkillsSkillsItemJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  aboutMe?: Maybe<StringQueryOperatorInput>
  skills1?: Maybe<StringQueryOperatorInput>
  skills2?: Maybe<StringQueryOperatorInput>
  skills3?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulSkillsSkillsItemJsonNodeSysFilterInput>
}

export type ContentfulSkillsSkillsItemJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulSkillsSkillsItemJsonNodeFilterInput>
}

export type ContentfulSkillsSkillsItemJsonNodeGroupConnection = {
  __typename?: 'contentfulSkillsSkillsItemJsonNodeGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ContentfulSkillsSkillsItemJsonNodeEdge>
  nodes: Array<ContentfulSkillsSkillsItemJsonNode>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ContentfulSkillsSkillsItemJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillsSkillsItemJsonNodeFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulSkillsSkillsItemJsonNodeSys = {
  __typename?: 'contentfulSkillsSkillsItemJsonNodeSys'
  type?: Maybe<Scalars['String']>
}

export type ContentfulSkillsSkillsItemJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSkillsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSkillsFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type ContentfulSkillsSys = {
  __typename?: 'ContentfulSkillsSys'
  type?: Maybe<Scalars['String']>
  revision?: Maybe<Scalars['Int']>
  contentType?: Maybe<ContentfulSkillsSysContentType>
}

export type ContentfulSkillsSysContentType = {
  __typename?: 'ContentfulSkillsSysContentType'
  sys?: Maybe<ContentfulSkillsSysContentTypeSys>
}

export type ContentfulSkillsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSkillsSysContentTypeSysFilterInput>
}

export type ContentfulSkillsSysContentTypeSys = {
  __typename?: 'ContentfulSkillsSysContentTypeSys'
  type?: Maybe<Scalars['String']>
  linkType?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ContentfulSkillsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  linkType?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
}

export type ContentfulSkillsSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>
  revision?: Maybe<IntQueryOperatorInput>
  contentType?: Maybe<ContentfulSkillsSysContentTypeFilterInput>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
  __typename?: 'Directory'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge'
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity?: Maybe<Scalars['Int']>
}

export type File = Node & {
  __typename?: 'File'
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
  __typename?: 'FileConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: 'FileEdge'
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___resolutions___base64'
  | 'childrenImageSharp___resolutions___tracedSVG'
  | 'childrenImageSharp___resolutions___aspectRatio'
  | 'childrenImageSharp___resolutions___width'
  | 'childrenImageSharp___resolutions___height'
  | 'childrenImageSharp___resolutions___src'
  | 'childrenImageSharp___resolutions___srcSet'
  | 'childrenImageSharp___resolutions___srcWebp'
  | 'childrenImageSharp___resolutions___srcSetWebp'
  | 'childrenImageSharp___resolutions___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___sizes___base64'
  | 'childrenImageSharp___sizes___tracedSVG'
  | 'childrenImageSharp___sizes___aspectRatio'
  | 'childrenImageSharp___sizes___src'
  | 'childrenImageSharp___sizes___srcSet'
  | 'childrenImageSharp___sizes___srcWebp'
  | 'childrenImageSharp___sizes___srcSetWebp'
  | 'childrenImageSharp___sizes___sizes'
  | 'childrenImageSharp___sizes___originalImg'
  | 'childrenImageSharp___sizes___originalName'
  | 'childrenImageSharp___sizes___presentationWidth'
  | 'childrenImageSharp___sizes___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION'

export type ImageFit = 'COVER' | 'CONTAIN' | 'FILL' | 'INSIDE' | 'OUTSIDE'

export type ImageFormat = 'NO_CHANGE' | 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF'

export type ImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED'

export type ImagePlaceholder = 'DOMINANT_COLOR' | 'TRACED_SVG' | 'BLURRED' | 'NONE'

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE'

export type ImageSharp = Node & {
  __typename?: 'ImageSharp'
  fixed?: Maybe<ImageSharpFixed>
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>
  fluid?: Maybe<ImageSharpFluid>
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>
  gatsbyImageData: Scalars['JSON']
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  placeholder?: Maybe<ImagePlaceholder>
  blurredOptions?: Maybe<BlurredOptions>
  tracedSVGOptions?: Maybe<Potrace>
  formats?: Maybe<Array<Maybe<ImageFormat>>>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Int']>
  jpgOptions?: Maybe<JpgOptions>
  pngOptions?: Maybe<PngOptions>
  webpOptions?: Maybe<WebPOptions>
  avifOptions?: Maybe<AvifOptions>
  transformOptions?: Maybe<TransformOptions>
  backgroundColor?: Maybe<Scalars['String']>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge'
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>
}

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal'
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize'
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes'
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Internal = {
  __typename?: 'Internal'
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>
  progressive?: Maybe<Scalars['Boolean']>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

export type MarkdownExcerptFormats = 'PLAIN' | 'HTML' | 'MARKDOWN'

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading'
  id?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  depth?: Maybe<Scalars['Int']>
}

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  value?: Maybe<StringQueryOperatorInput>
  depth?: Maybe<IntQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>
}

export type MarkdownHeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark'
  id: Scalars['ID']
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>
  excerpt?: Maybe<Scalars['String']>
  rawMarkdownBody?: Maybe<Scalars['String']>
  html?: Maybe<Scalars['String']>
  htmlAst?: Maybe<Scalars['JSON']>
  excerptAst?: Maybe<Scalars['JSON']>
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>
  timeToRead?: Maybe<Scalars['Int']>
  tableOfContents?: Maybe<Scalars['String']>
  wordCount?: Maybe<MarkdownWordCount>
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
  format?: Maybe<MarkdownExcerptFormats>
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>
  pathToSlugField?: Maybe<Scalars['String']>
  maxDepth?: Maybe<Scalars['Int']>
  heading?: Maybe<Scalars['String']>
}

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection'
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<MarkdownRemarkGroupConnection>
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge'
  next?: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous?: Maybe<MarkdownRemark>
}

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'frontmatter___title'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>
}

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter'
  title?: Maybe<Scalars['String']>
}

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
}

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount'
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>
  compressionSpeed?: Maybe<Scalars['Int']>
}

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars['Float']>
  alphaMax?: Maybe<Scalars['Float']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
}

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY'

export type Query = {
  __typename?: 'Query'
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  markdownRemark?: Maybe<MarkdownRemark>
  allMarkdownRemark: MarkdownRemarkConnection
  contentfulAsset?: Maybe<ContentfulAsset>
  allContentfulAsset: ContentfulAssetConnection
  contentfulSkillsSkillsItemJsonNode?: Maybe<ContentfulSkillsSkillsItemJsonNode>
  allContentfulSkillsSkillsItemJsonNode: ContentfulSkillsSkillsItemJsonNodeConnection
  contentfulSkills?: Maybe<ContentfulSkills>
  allContentfulSkills: ContentfulSkillsConnection
  contentfulBlogPostBodyContentTextNode?: Maybe<ContentfulBlogPostBodyContentTextNode>
  allContentfulBlogPostBodyContentTextNode: ContentfulBlogPostBodyContentTextNodeConnection
  contentfulBlogPost?: Maybe<ContentfulBlogPost>
  allContentfulBlogPost: ContentfulBlogPostConnection
  contentfulContentType?: Maybe<ContentfulContentType>
  allContentfulContentType: ContentfulContentTypeConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  flags?: Maybe<SiteFlagsFilterInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  sizes?: Maybe<ImageSharpSizesFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>
  sort?: Maybe<MarkdownRemarkSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  file?: Maybe<ContentfulAssetFileFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulAssetSysFilterInput>
  fixed?: Maybe<ContentfulFixedFilterInput>
  resolutions?: Maybe<ContentfulResolutionsFilterInput>
  fluid?: Maybe<ContentfulFluidFilterInput>
  sizes?: Maybe<ContentfulSizesFilterInput>
  resize?: Maybe<ContentfulResizeFilterInput>
}

export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>
  sort?: Maybe<ContentfulAssetSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulSkillsSkillsItemJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  aboutMe?: Maybe<StringQueryOperatorInput>
  skills1?: Maybe<StringQueryOperatorInput>
  skills2?: Maybe<StringQueryOperatorInput>
  skills3?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulSkillsSkillsItemJsonNodeSysFilterInput>
}

export type QueryAllContentfulSkillsSkillsItemJsonNodeArgs = {
  filter?: Maybe<ContentfulSkillsSkillsItemJsonNodeFilterInput>
  sort?: Maybe<ContentfulSkillsSkillsItemJsonNodeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulSkillsArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  skillsItem?: Maybe<ContentfulSkillsSkillsItemJsonNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulSkillsSysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  childrenContentfulSkillsSkillsItemJsonNode?: Maybe<ContentfulSkillsSkillsItemJsonNodeFilterListInput>
  childContentfulSkillsSkillsItemJsonNode?: Maybe<ContentfulSkillsSkillsItemJsonNodeFilterInput>
}

export type QueryAllContentfulSkillsArgs = {
  filter?: Maybe<ContentfulSkillsFilterInput>
  sort?: Maybe<ContentfulSkillsSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulBlogPostBodyContentTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  bodyContent?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulBlogPostBodyContentTextNodeSysFilterInput>
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
}

export type QueryAllContentfulBlogPostBodyContentTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBodyContentTextNodeFilterInput>
  sort?: Maybe<ContentfulBlogPostBodyContentTextNodeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  title?: Maybe<StringQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  publishedDate?: Maybe<DateQueryOperatorInput>
  image?: Maybe<ContentfulAssetFilterInput>
  bodyContent?: Maybe<ContentfulBlogPostBodyContentTextNodeFilterInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  contentful_id?: Maybe<StringQueryOperatorInput>
  createdAt?: Maybe<DateQueryOperatorInput>
  updatedAt?: Maybe<DateQueryOperatorInput>
  sys?: Maybe<ContentfulBlogPostSysFilterInput>
  node_locale?: Maybe<StringQueryOperatorInput>
  childrenContentfulBlogPostBodyContentTextNode?: Maybe<ContentfulBlogPostBodyContentTextNodeFilterListInput>
  childContentfulBlogPostBodyContentTextNode?: Maybe<ContentfulBlogPostBodyContentTextNodeFilterInput>
}

export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>
  sort?: Maybe<ContentfulBlogPostSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  name?: Maybe<StringQueryOperatorInput>
  displayField?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  sys?: Maybe<ContentfulContentTypeSysFilterInput>
}

export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>
  sort?: Maybe<ContentfulContentTypeSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type Site = Node & {
  __typename?: 'Site'
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  flags?: Maybe<SiteFlags>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge'
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime'

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: 'SiteConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: 'SiteEdge'
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___defaultImage'
  | 'port'
  | 'host'
  | 'flags___DEV_SSR'
  | 'flags___FAST_DEV'
  | 'flags___FAST_REFRESH'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  flags?: Maybe<SiteFlagsFilterInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFlags = {
  __typename?: 'SiteFlags'
  DEV_SSR?: Maybe<Scalars['Boolean']>
  FAST_DEV?: Maybe<Scalars['Boolean']>
  FAST_REFRESH?: Maybe<Scalars['Boolean']>
}

export type SiteFlagsFilterInput = {
  DEV_SSR?: Maybe<BooleanQueryOperatorInput>
  FAST_DEV?: Maybe<BooleanQueryOperatorInput>
  FAST_REFRESH?: Maybe<BooleanQueryOperatorInput>
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePage = Node & {
  __typename?: 'SitePage'
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
  componentPath?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
  __typename?: 'SitePageConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  __typename?: 'SitePageContext'
  slug?: Maybe<Scalars['String']>
}

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  __typename?: 'SitePageEdge'
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___trackingId'
  | 'pluginCreator___pluginOptions___anonymize'
  | 'pluginCreator___pluginOptions___head'
  | 'pluginCreator___pluginOptions___respectDNT'
  | 'pluginCreator___pluginOptions___exclude'
  | 'pluginCreator___pluginOptions___pageTransitionDelay'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___namespace'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___stages'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___component'
  | 'pluginCreator___pluginOptions___dest'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___downloadLocal'
  | 'pluginCreator___pluginOptions___forceFullSync'
  | 'pluginCreator___pluginOptions___pageLimit'
  | 'pluginCreator___pluginOptions___assetDownloadWorkers'
  | 'pluginCreator___pluginOptions___useNameForId'
  | 'pluginCreator___pluginOptions___query'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___policy'
  | 'pluginCreator___pluginOptions___policy___userAgent'
  | 'pluginCreator___pluginOptions___policy___allow'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath'

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
  componentPath?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: 'SitePlugin'
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge'
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___trackingId'
  | 'pluginOptions___anonymize'
  | 'pluginOptions___head'
  | 'pluginOptions___respectDNT'
  | 'pluginOptions___exclude'
  | 'pluginOptions___pageTransitionDelay'
  | 'pluginOptions___displayName'
  | 'pluginOptions___fileName'
  | 'pluginOptions___minify'
  | 'pluginOptions___namespace'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___stages'
  | 'pluginOptions___extensions'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___component'
  | 'pluginOptions___dest'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___path'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___host'
  | 'pluginOptions___environment'
  | 'pluginOptions___downloadLocal'
  | 'pluginOptions___forceFullSync'
  | 'pluginOptions___pageLimit'
  | 'pluginOptions___assetDownloadWorkers'
  | 'pluginOptions___useNameForId'
  | 'pluginOptions___query'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___policy'
  | 'pluginOptions___policy___userAgent'
  | 'pluginOptions___policy___allow'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords'

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  trackingId?: Maybe<Scalars['String']>
  anonymize?: Maybe<Scalars['Boolean']>
  head?: Maybe<Scalars['Boolean']>
  respectDNT?: Maybe<Scalars['Boolean']>
  exclude?: Maybe<Array<Maybe<Scalars['String']>>>
  pageTransitionDelay?: Maybe<Scalars['Int']>
  displayName?: Maybe<Scalars['Boolean']>
  fileName?: Maybe<Scalars['Boolean']>
  minify?: Maybe<Scalars['Boolean']>
  namespace?: Maybe<Scalars['String']>
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>
  pure?: Maybe<Scalars['Boolean']>
  base64Width?: Maybe<Scalars['Int']>
  stripMetadata?: Maybe<Scalars['Boolean']>
  defaultQuality?: Maybe<Scalars['Int']>
  failOnError?: Maybe<Scalars['Boolean']>
  stages?: Maybe<Array<Maybe<Scalars['String']>>>
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>
  name?: Maybe<Scalars['String']>
  short_name?: Maybe<Scalars['String']>
  start_url?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  theme_color?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  legacy?: Maybe<Scalars['Boolean']>
  theme_color_in_head?: Maybe<Scalars['Boolean']>
  cache_busting_mode?: Maybe<Scalars['String']>
  crossOrigin?: Maybe<Scalars['String']>
  include_favicon?: Maybe<Scalars['Boolean']>
  cacheDigest?: Maybe<Scalars['String']>
  component?: Maybe<Scalars['String']>
  dest?: Maybe<Scalars['String']>
  isTSX?: Maybe<Scalars['Boolean']>
  jsxPragma?: Maybe<Scalars['String']>
  allExtensions?: Maybe<Scalars['Boolean']>
  path?: Maybe<Scalars['String']>
  spaceId?: Maybe<Scalars['String']>
  accessToken?: Maybe<Scalars['String']>
  host?: Maybe<Scalars['String']>
  environment?: Maybe<Scalars['String']>
  downloadLocal?: Maybe<Scalars['Boolean']>
  forceFullSync?: Maybe<Scalars['Boolean']>
  pageLimit?: Maybe<Scalars['Int']>
  assetDownloadWorkers?: Maybe<Scalars['Int']>
  useNameForId?: Maybe<Scalars['Boolean']>
  query?: Maybe<Scalars['String']>
  output?: Maybe<Scalars['String']>
  createLinkInHead?: Maybe<Scalars['Boolean']>
  policy?: Maybe<Array<Maybe<SitePluginPluginOptionsPolicy>>>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsFilterInput = {
  trackingId?: Maybe<StringQueryOperatorInput>
  anonymize?: Maybe<BooleanQueryOperatorInput>
  head?: Maybe<BooleanQueryOperatorInput>
  respectDNT?: Maybe<BooleanQueryOperatorInput>
  exclude?: Maybe<StringQueryOperatorInput>
  pageTransitionDelay?: Maybe<IntQueryOperatorInput>
  displayName?: Maybe<BooleanQueryOperatorInput>
  fileName?: Maybe<BooleanQueryOperatorInput>
  minify?: Maybe<BooleanQueryOperatorInput>
  namespace?: Maybe<StringQueryOperatorInput>
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>
  pure?: Maybe<BooleanQueryOperatorInput>
  base64Width?: Maybe<IntQueryOperatorInput>
  stripMetadata?: Maybe<BooleanQueryOperatorInput>
  defaultQuality?: Maybe<IntQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  stages?: Maybe<StringQueryOperatorInput>
  extensions?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  crossOrigin?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  cacheDigest?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  dest?: Maybe<StringQueryOperatorInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  spaceId?: Maybe<StringQueryOperatorInput>
  accessToken?: Maybe<StringQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  environment?: Maybe<StringQueryOperatorInput>
  downloadLocal?: Maybe<BooleanQueryOperatorInput>
  forceFullSync?: Maybe<BooleanQueryOperatorInput>
  pageLimit?: Maybe<IntQueryOperatorInput>
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>
  useNameForId?: Maybe<BooleanQueryOperatorInput>
  query?: Maybe<StringQueryOperatorInput>
  output?: Maybe<StringQueryOperatorInput>
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>
  policy?: Maybe<SitePluginPluginOptionsPolicyFilterListInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsPolicy = {
  __typename?: 'SitePluginPluginOptionsPolicy'
  userAgent?: Maybe<Scalars['String']>
  allow?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsPolicyFilterInput = {
  userAgent?: Maybe<StringQueryOperatorInput>
  allow?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsPolicyFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPolicyFilterInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  defaultImage?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
  defaultImage?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
}

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>
}
