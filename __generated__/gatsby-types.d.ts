/* eslint-disable */

declare namespace GatsbyTypes {
  type Maybe<T> = T | undefined
  type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]}
  type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>}
  type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>}
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
    ID: string
    /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
    String: string
    /** The `Boolean` scalar type represents `true` or `false`. */
    Boolean: boolean
    /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
    Int: number
    /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
    Float: number
    /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: string
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: never
  }

  type File = Node & {
    readonly sourceInstanceName: Scalars['String']
    readonly absolutePath: Scalars['String']
    readonly relativePath: Scalars['String']
    readonly extension: Scalars['String']
    readonly size: Scalars['Int']
    readonly prettySize: Scalars['String']
    readonly modifiedTime: Scalars['Date']
    readonly accessTime: Scalars['Date']
    readonly changeTime: Scalars['Date']
    readonly birthTime: Scalars['Date']
    readonly root: Scalars['String']
    readonly dir: Scalars['String']
    readonly base: Scalars['String']
    readonly ext: Scalars['String']
    readonly name: Scalars['String']
    readonly relativeDirectory: Scalars['String']
    readonly dev: Scalars['Int']
    readonly mode: Scalars['Int']
    readonly nlink: Scalars['Int']
    readonly uid: Scalars['Int']
    readonly gid: Scalars['Int']
    readonly rdev: Scalars['Int']
    readonly ino: Scalars['Float']
    readonly atimeMs: Scalars['Float']
    readonly mtimeMs: Scalars['Float']
    readonly ctimeMs: Scalars['Float']
    readonly atime: Scalars['Date']
    readonly mtime: Scalars['Date']
    readonly ctime: Scalars['Date']
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>
    readonly blksize: Maybe<Scalars['Int']>
    readonly blocks: Maybe<Scalars['Int']>
    readonly url: Maybe<Scalars['String']>
    /** Copy file to static directory and return public url to it */
    readonly publicURL: Maybe<Scalars['String']>
    /** Returns all children nodes filtered by type ImageSharp */
    readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>
    /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
    readonly childImageSharp: Maybe<ImageSharp>
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type File_modifiedTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_accessTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_changeTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_birthTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_atimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_mtimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type File_ctimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  /** Node Interface */
  type Node = {
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type Internal = {
    readonly content: Maybe<Scalars['String']>
    readonly contentDigest: Scalars['String']
    readonly description: Maybe<Scalars['String']>
    readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly ignoreType: Maybe<Scalars['Boolean']>
    readonly mediaType: Maybe<Scalars['String']>
    readonly owner: Scalars['String']
    readonly type: Scalars['String']
  }

  type Directory = Node & {
    readonly sourceInstanceName: Scalars['String']
    readonly absolutePath: Scalars['String']
    readonly relativePath: Scalars['String']
    readonly extension: Scalars['String']
    readonly size: Scalars['Int']
    readonly prettySize: Scalars['String']
    readonly modifiedTime: Scalars['Date']
    readonly accessTime: Scalars['Date']
    readonly changeTime: Scalars['Date']
    readonly birthTime: Scalars['Date']
    readonly root: Scalars['String']
    readonly dir: Scalars['String']
    readonly base: Scalars['String']
    readonly ext: Scalars['String']
    readonly name: Scalars['String']
    readonly relativeDirectory: Scalars['String']
    readonly dev: Scalars['Int']
    readonly mode: Scalars['Int']
    readonly nlink: Scalars['Int']
    readonly uid: Scalars['Int']
    readonly gid: Scalars['Int']
    readonly rdev: Scalars['Int']
    readonly ino: Scalars['Float']
    readonly atimeMs: Scalars['Float']
    readonly mtimeMs: Scalars['Float']
    readonly ctimeMs: Scalars['Float']
    readonly atime: Scalars['Date']
    readonly mtime: Scalars['Date']
    readonly ctime: Scalars['Date']
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars['Date']>
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars['Float']>
    readonly blksize: Maybe<Scalars['Int']>
    readonly blocks: Maybe<Scalars['Int']>
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type Directory_modifiedTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_accessTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_changeTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_birthTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_atimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_mtimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Directory_ctimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type Site = Node & {
    readonly buildTime: Maybe<Scalars['Date']>
    readonly siteMetadata: Maybe<SiteSiteMetadata>
    readonly port: Maybe<Scalars['Int']>
    readonly host: Maybe<Scalars['String']>
    readonly flags: Maybe<SiteFlags>
    readonly polyfill: Maybe<Scalars['Boolean']>
    readonly pathPrefix: Maybe<Scalars['String']>
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type Site_buildTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type SiteFlags = {
    readonly DEV_SSR: Maybe<Scalars['Boolean']>
    readonly FAST_DEV: Maybe<Scalars['Boolean']>
  }

  type SiteSiteMetadata = {
    readonly title: Maybe<Scalars['String']>
    readonly description: Maybe<Scalars['String']>
    readonly author: Maybe<Scalars['String']>
    readonly siteUrl: Maybe<Scalars['String']>
    readonly defaultImage: Maybe<Scalars['String']>
  }

  type SitePage = Node & {
    readonly path: Scalars['String']
    readonly component: Scalars['String']
    readonly internalComponentName: Scalars['String']
    readonly componentChunkName: Scalars['String']
    readonly matchPath: Maybe<Scalars['String']>
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
    readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>
    readonly context: Maybe<SitePageContext>
    readonly pluginCreator: Maybe<SitePlugin>
    readonly pluginCreatorId: Maybe<Scalars['String']>
    readonly componentPath: Maybe<Scalars['String']>
  }

  type SitePageContext = {
    readonly slug: Maybe<Scalars['String']>
  }

  type ImageFormat = 'NO_CHANGE' | 'AUTO' | 'jpg' | 'png' | 'webp' | 'avif'

  type ImageFit = 'cover' | 'contain' | 'fill' | 'inside' | 'outside'

  type ImageLayout = 'fixed' | 'fullWidth' | 'constrained'

  type ImageCropFocus = 'CENTER' | 1 | 5 | 2 | 6 | 3 | 7 | 4 | 8 | 16 | 17

  type DuotoneGradient = {
    readonly highlight: Scalars['String']
    readonly shadow: Scalars['String']
    readonly opacity: Maybe<Scalars['Int']>
  }

  type PotraceTurnPolicy = 'black' | 'white' | 'left' | 'right' | 'minority' | 'majority'

  type Potrace = {
    readonly turnPolicy: Maybe<PotraceTurnPolicy>
    readonly turdSize: Maybe<Scalars['Float']>
    readonly alphaMax: Maybe<Scalars['Float']>
    readonly optCurve: Maybe<Scalars['Boolean']>
    readonly optTolerance: Maybe<Scalars['Float']>
    readonly threshold: Maybe<Scalars['Int']>
    readonly blackOnWhite: Maybe<Scalars['Boolean']>
    readonly color: Maybe<Scalars['String']>
    readonly background: Maybe<Scalars['String']>
  }

  type ImageSharp = Node & {
    readonly fixed: Maybe<ImageSharpFixed>
    readonly fluid: Maybe<ImageSharpFluid>
    readonly gatsbyImageData: Scalars['JSON']
    readonly original: Maybe<ImageSharpOriginal>
    readonly resize: Maybe<ImageSharpResize>
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type ImageSharp_fixedArgs = {
    width: Maybe<Scalars['Int']>
    height: Maybe<Scalars['Int']>
    base64Width: Maybe<Scalars['Int']>
    jpegProgressive?: Maybe<Scalars['Boolean']>
    pngCompressionSpeed?: Maybe<Scalars['Int']>
    grayscale?: Maybe<Scalars['Boolean']>
    duotone: Maybe<DuotoneGradient>
    traceSVG: Maybe<Potrace>
    quality: Maybe<Scalars['Int']>
    jpegQuality: Maybe<Scalars['Int']>
    pngQuality: Maybe<Scalars['Int']>
    webpQuality: Maybe<Scalars['Int']>
    toFormat?: Maybe<ImageFormat>
    toFormatBase64?: Maybe<ImageFormat>
    cropFocus?: Maybe<ImageCropFocus>
    fit?: Maybe<ImageFit>
    background?: Maybe<Scalars['String']>
    rotate?: Maybe<Scalars['Int']>
    trim?: Maybe<Scalars['Float']>
  }

  type ImageSharp_fluidArgs = {
    maxWidth: Maybe<Scalars['Int']>
    maxHeight: Maybe<Scalars['Int']>
    base64Width: Maybe<Scalars['Int']>
    grayscale?: Maybe<Scalars['Boolean']>
    jpegProgressive?: Maybe<Scalars['Boolean']>
    pngCompressionSpeed?: Maybe<Scalars['Int']>
    duotone: Maybe<DuotoneGradient>
    traceSVG: Maybe<Potrace>
    quality: Maybe<Scalars['Int']>
    jpegQuality: Maybe<Scalars['Int']>
    pngQuality: Maybe<Scalars['Int']>
    webpQuality: Maybe<Scalars['Int']>
    toFormat?: Maybe<ImageFormat>
    toFormatBase64?: Maybe<ImageFormat>
    cropFocus?: Maybe<ImageCropFocus>
    fit?: Maybe<ImageFit>
    background?: Maybe<Scalars['String']>
    rotate?: Maybe<Scalars['Int']>
    trim?: Maybe<Scalars['Float']>
    sizes?: Maybe<Scalars['String']>
    srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
  }

  type ImageSharp_gatsbyImageDataArgs = {
    layout?: Maybe<ImageLayout>
    width: Maybe<Scalars['Int']>
    height: Maybe<Scalars['Int']>
    aspectRatio: Maybe<Scalars['Float']>
    placeholder: Maybe<ImagePlaceholder>
    blurredOptions: Maybe<BlurredOptions>
    tracedSVGOptions: Maybe<Potrace>
    formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>
    outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
    breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
    sizes: Maybe<Scalars['String']>
    quality: Maybe<Scalars['Int']>
    jpgOptions: Maybe<JPGOptions>
    pngOptions: Maybe<PNGOptions>
    webpOptions: Maybe<WebPOptions>
    avifOptions: Maybe<AVIFOptions>
    transformOptions: Maybe<TransformOptions>
    backgroundColor: Maybe<Scalars['String']>
  }

  type ImageSharp_resizeArgs = {
    width: Maybe<Scalars['Int']>
    height: Maybe<Scalars['Int']>
    quality: Maybe<Scalars['Int']>
    jpegQuality: Maybe<Scalars['Int']>
    pngQuality: Maybe<Scalars['Int']>
    webpQuality: Maybe<Scalars['Int']>
    jpegProgressive?: Maybe<Scalars['Boolean']>
    pngCompressionLevel?: Maybe<Scalars['Int']>
    pngCompressionSpeed?: Maybe<Scalars['Int']>
    grayscale?: Maybe<Scalars['Boolean']>
    duotone: Maybe<DuotoneGradient>
    base64?: Maybe<Scalars['Boolean']>
    traceSVG: Maybe<Potrace>
    toFormat?: Maybe<ImageFormat>
    cropFocus?: Maybe<ImageCropFocus>
    fit?: Maybe<ImageFit>
    background?: Maybe<Scalars['String']>
    rotate?: Maybe<Scalars['Int']>
    trim?: Maybe<Scalars['Float']>
  }

  type ImageSharpFixed = {
    readonly base64: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly aspectRatio: Maybe<Scalars['Float']>
    readonly width: Scalars['Float']
    readonly height: Scalars['Float']
    readonly src: Scalars['String']
    readonly srcSet: Scalars['String']
    readonly srcWebp: Maybe<Scalars['String']>
    readonly srcSetWebp: Maybe<Scalars['String']>
    readonly originalName: Maybe<Scalars['String']>
  }

  type ImageSharpFluid = {
    readonly base64: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly aspectRatio: Scalars['Float']
    readonly src: Scalars['String']
    readonly srcSet: Scalars['String']
    readonly srcWebp: Maybe<Scalars['String']>
    readonly srcSetWebp: Maybe<Scalars['String']>
    readonly sizes: Scalars['String']
    readonly originalImg: Maybe<Scalars['String']>
    readonly originalName: Maybe<Scalars['String']>
    readonly presentationWidth: Scalars['Int']
    readonly presentationHeight: Scalars['Int']
  }

  type ImagePlaceholder = 'dominantColor' | 'tracedSVG' | 'blurred' | 'none'

  type BlurredOptions = {
    /** Width of the generated low-res preview. Default is 20px */
    readonly width: Maybe<Scalars['Int']>
    /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
    readonly toFormat: Maybe<ImageFormat>
  }

  type JPGOptions = {
    readonly quality: Maybe<Scalars['Int']>
    readonly progressive: Maybe<Scalars['Boolean']>
  }

  type PNGOptions = {
    readonly quality: Maybe<Scalars['Int']>
    readonly compressionSpeed: Maybe<Scalars['Int']>
  }

  type WebPOptions = {
    readonly quality: Maybe<Scalars['Int']>
  }

  type AVIFOptions = {
    readonly quality: Maybe<Scalars['Int']>
    readonly lossless: Maybe<Scalars['Boolean']>
    readonly speed: Maybe<Scalars['Int']>
  }

  type TransformOptions = {
    readonly grayscale: Maybe<Scalars['Boolean']>
    readonly duotone: Maybe<DuotoneGradient>
    readonly rotate: Maybe<Scalars['Int']>
    readonly trim: Maybe<Scalars['Float']>
    readonly cropFocus: Maybe<ImageCropFocus>
    readonly fit: Maybe<ImageFit>
  }

  type ImageSharpOriginal = {
    readonly width: Maybe<Scalars['Float']>
    readonly height: Maybe<Scalars['Float']>
    readonly src: Maybe<Scalars['String']>
  }

  type ImageSharpResize = {
    readonly src: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly width: Maybe<Scalars['Int']>
    readonly height: Maybe<Scalars['Int']>
    readonly aspectRatio: Maybe<Scalars['Float']>
    readonly originalName: Maybe<Scalars['String']>
  }

  type MarkdownHeading = {
    readonly id: Maybe<Scalars['String']>
    readonly value: Maybe<Scalars['String']>
    readonly depth: Maybe<Scalars['Int']>
  }

  type MarkdownHeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  type MarkdownExcerptFormats = 'PLAIN' | 'HTML' | 'MARKDOWN'

  type MarkdownWordCount = {
    readonly paragraphs: Maybe<Scalars['Int']>
    readonly sentences: Maybe<Scalars['Int']>
    readonly words: Maybe<Scalars['Int']>
  }

  type MarkdownRemark = Node & {
    readonly id: Scalars['ID']
    readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>
    readonly excerpt: Maybe<Scalars['String']>
    readonly rawMarkdownBody: Maybe<Scalars['String']>
    readonly html: Maybe<Scalars['String']>
    readonly htmlAst: Maybe<Scalars['JSON']>
    readonly excerptAst: Maybe<Scalars['JSON']>
    readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>
    readonly timeToRead: Maybe<Scalars['Int']>
    readonly tableOfContents: Maybe<Scalars['String']>
    readonly wordCount: Maybe<MarkdownWordCount>
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type MarkdownRemark_excerptArgs = {
    pruneLength?: Maybe<Scalars['Int']>
    truncate?: Maybe<Scalars['Boolean']>
    format?: Maybe<MarkdownExcerptFormats>
  }

  type MarkdownRemark_excerptAstArgs = {
    pruneLength?: Maybe<Scalars['Int']>
    truncate?: Maybe<Scalars['Boolean']>
  }

  type MarkdownRemark_headingsArgs = {
    depth: Maybe<MarkdownHeadingLevels>
  }

  type MarkdownRemark_tableOfContentsArgs = {
    absolute?: Maybe<Scalars['Boolean']>
    pathToSlugField?: Maybe<Scalars['String']>
    maxDepth: Maybe<Scalars['Int']>
    heading: Maybe<Scalars['String']>
  }

  type MarkdownRemarkFrontmatter = {
    readonly title: Maybe<Scalars['String']>
  }

  type ContentfulEntry = {
    readonly contentful_id: Scalars['String']
    readonly id: Scalars['ID']
    readonly node_locale: Scalars['String']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
  }

  type ContentfulReference = {
    readonly contentful_id: Scalars['String']
    readonly id: Scalars['ID']
  }

  type ContentfulAsset = ContentfulReference &
    Node & {
      readonly contentful_id: Scalars['String']
      readonly id: Scalars['ID']
      readonly spaceId: Maybe<Scalars['String']>
      readonly createdAt: Maybe<Scalars['Date']>
      readonly updatedAt: Maybe<Scalars['Date']>
      readonly file: Maybe<ContentfulAssetFile>
      readonly title: Maybe<Scalars['String']>
      readonly description: Maybe<Scalars['String']>
      readonly node_locale: Maybe<Scalars['String']>
      readonly sys: Maybe<ContentfulAssetSys>
      readonly localFile: Maybe<File>
      readonly fixed: Maybe<ContentfulFixed>
      readonly fluid: Maybe<ContentfulFluid>
      readonly gatsbyImageData: Maybe<Scalars['JSON']>
      readonly resize: Maybe<ContentfulResize>
      readonly parent: Maybe<Node>
      readonly children: ReadonlyArray<Node>
      readonly internal: Internal
    }

  type ContentfulAsset_createdAtArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type ContentfulAsset_updatedAtArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type ContentfulAsset_fixedArgs = {
    width: Maybe<Scalars['Int']>
    height: Maybe<Scalars['Int']>
    quality?: Maybe<Scalars['Int']>
    toFormat?: Maybe<ContentfulImageFormat>
    resizingBehavior: Maybe<ImageResizingBehavior>
    cropFocus?: Maybe<ContentfulImageCropFocus>
    background?: Maybe<Scalars['String']>
  }

  type ContentfulAsset_fluidArgs = {
    maxWidth: Maybe<Scalars['Int']>
    maxHeight: Maybe<Scalars['Int']>
    quality?: Maybe<Scalars['Int']>
    toFormat?: Maybe<ContentfulImageFormat>
    resizingBehavior: Maybe<ImageResizingBehavior>
    cropFocus?: Maybe<ContentfulImageCropFocus>
    background?: Maybe<Scalars['String']>
    sizes: Maybe<Scalars['String']>
  }

  type ContentfulAsset_gatsbyImageDataArgs = {
    layout: Maybe<GatsbyImageLayout>
    width: Maybe<Scalars['Int']>
    height: Maybe<Scalars['Int']>
    aspectRatio: Maybe<Scalars['Float']>
    placeholder: Maybe<GatsbyImagePlaceholder>
    formats?: Maybe<ReadonlyArray<Maybe<ContentfulImageFormat>>>
    outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
    breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
    sizes: Maybe<Scalars['String']>
    backgroundColor: Maybe<Scalars['String']>
    jpegProgressive?: Maybe<Scalars['Boolean']>
    resizingBehavior: Maybe<ImageResizingBehavior>
    cropFocus: Maybe<ContentfulImageCropFocus>
    quality?: Maybe<Scalars['Int']>
  }

  type ContentfulAsset_resizeArgs = {
    width: Maybe<Scalars['Int']>
    height: Maybe<Scalars['Int']>
    quality?: Maybe<Scalars['Int']>
    jpegProgressive?: Maybe<Scalars['Boolean']>
    resizingBehavior: Maybe<ImageResizingBehavior>
    toFormat?: Maybe<ContentfulImageFormat>
    cropFocus?: Maybe<ContentfulImageCropFocus>
    background?: Maybe<Scalars['String']>
  }

  type ContentfulAssetFile = {
    readonly url: Maybe<Scalars['String']>
    readonly details: Maybe<ContentfulAssetFileDetails>
    readonly fileName: Maybe<Scalars['String']>
    readonly contentType: Maybe<Scalars['String']>
  }

  type ContentfulAssetFileDetails = {
    readonly size: Maybe<Scalars['Int']>
    readonly image: Maybe<ContentfulAssetFileDetailsImage>
  }

  type ContentfulAssetFileDetailsImage = {
    readonly width: Maybe<Scalars['Int']>
    readonly height: Maybe<Scalars['Int']>
  }

  type ContentfulAssetSys = {
    readonly type: Maybe<Scalars['String']>
    readonly revision: Maybe<Scalars['Int']>
  }

  type ContentfulFixed = {
    readonly base64: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly aspectRatio: Maybe<Scalars['Float']>
    readonly width: Scalars['Float']
    readonly height: Scalars['Float']
    readonly src: Scalars['String']
    readonly srcSet: Scalars['String']
    readonly srcWebp: Maybe<Scalars['String']>
    readonly srcSetWebp: Maybe<Scalars['String']>
  }

  type ContentfulImageFormat = 'NO_CHANGE' | 'AUTO' | 'jpg' | 'png' | 'webp'

  type ImageResizingBehavior =
    | 'NO_CHANGE'
    /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
    | 'pad'
    /** Crop a part of the original image to match the specified size. */
    | 'crop'
    /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
    | 'fill'
    /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
    | 'thumb'
    /** Scale the image regardless of the original aspect ratio. */
    | 'scale'

  type ContentfulImageCropFocus =
    | 'top'
    | 'top_left'
    | 'top_right'
    | 'bottom'
    | 'bottom_left'
    | 'bottom_right'
    | 'right'
    | 'left'
    | 'face'
    | 'faces'
    | 'center'

  type ContentfulFluid = {
    readonly base64: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly aspectRatio: Scalars['Float']
    readonly src: Scalars['String']
    readonly srcSet: Scalars['String']
    readonly srcWebp: Maybe<Scalars['String']>
    readonly srcSetWebp: Maybe<Scalars['String']>
    readonly sizes: Scalars['String']
  }

  type GatsbyImageLayout = 'fixed' | 'fullWidth' | 'constrained'

  type GatsbyImagePlaceholder = 'dominantColor' | 'tracedSVG' | 'blurred' | 'none'

  type ContentfulResize = {
    readonly base64: Maybe<Scalars['String']>
    readonly tracedSVG: Maybe<Scalars['String']>
    readonly src: Maybe<Scalars['String']>
    readonly width: Maybe<Scalars['Int']>
    readonly height: Maybe<Scalars['Int']>
    readonly aspectRatio: Maybe<Scalars['Float']>
  }

  type ContentfulBlogPost = ContentfulReference &
    ContentfulEntry &
    Node & {
      readonly contentful_id: Scalars['String']
      readonly id: Scalars['ID']
      readonly node_locale: Scalars['String']
      readonly title: Maybe<Scalars['String']>
      readonly slug: Maybe<Scalars['String']>
      readonly publishedDate: Maybe<Scalars['Date']>
      readonly image: Maybe<ContentfulAsset>
      readonly bodyContent: Maybe<contentfulBlogPostBodyContentTextNode>
      readonly spaceId: Maybe<Scalars['String']>
      readonly createdAt: Maybe<Scalars['Date']>
      readonly updatedAt: Maybe<Scalars['Date']>
      readonly sys: Maybe<ContentfulBlogPostSys>
      /** Returns all children nodes filtered by type contentfulBlogPostBodyContentTextNode */
      readonly childrenContentfulBlogPostBodyContentTextNode: Maybe<
        ReadonlyArray<Maybe<contentfulBlogPostBodyContentTextNode>>
      >
      /** Returns the first child node of type contentfulBlogPostBodyContentTextNode or null if there are no children of given type on this node */
      readonly childContentfulBlogPostBodyContentTextNode: Maybe<contentfulBlogPostBodyContentTextNode>
      readonly parent: Maybe<Node>
      readonly children: ReadonlyArray<Node>
      readonly internal: Internal
    }

  type ContentfulBlogPost_publishedDateArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type ContentfulBlogPost_createdAtArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type ContentfulBlogPost_updatedAtArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type ContentfulBlogPostSys = {
    readonly type: Maybe<Scalars['String']>
    readonly revision: Maybe<Scalars['Int']>
    readonly contentType: Maybe<ContentfulBlogPostSysContentType>
  }

  type ContentfulBlogPostSysContentType = {
    readonly sys: Maybe<ContentfulBlogPostSysContentTypeSys>
  }

  type ContentfulBlogPostSysContentTypeSys = {
    readonly type: Maybe<Scalars['String']>
    readonly linkType: Maybe<Scalars['String']>
    readonly id: Maybe<Scalars['String']>
  }

  type ContentfulSkills = ContentfulReference &
    ContentfulEntry &
    Node & {
      readonly contentful_id: Scalars['String']
      readonly id: Scalars['ID']
      readonly node_locale: Scalars['String']
      readonly skillsItem: Maybe<contentfulSkillsSkillsItemJsonNode>
      readonly spaceId: Maybe<Scalars['String']>
      readonly createdAt: Maybe<Scalars['Date']>
      readonly updatedAt: Maybe<Scalars['Date']>
      readonly sys: Maybe<ContentfulSkillsSys>
      /** Returns all children nodes filtered by type contentfulSkillsSkillsItemJsonNode */
      readonly childrenContentfulSkillsSkillsItemJsonNode: Maybe<
        ReadonlyArray<Maybe<contentfulSkillsSkillsItemJsonNode>>
      >
      /** Returns the first child node of type contentfulSkillsSkillsItemJsonNode or null if there are no children of given type on this node */
      readonly childContentfulSkillsSkillsItemJsonNode: Maybe<contentfulSkillsSkillsItemJsonNode>
      readonly parent: Maybe<Node>
      readonly children: ReadonlyArray<Node>
      readonly internal: Internal
    }

  type ContentfulSkills_createdAtArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type ContentfulSkills_updatedAtArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type ContentfulSkillsSys = {
    readonly type: Maybe<Scalars['String']>
    readonly revision: Maybe<Scalars['Int']>
    readonly contentType: Maybe<ContentfulSkillsSysContentType>
  }

  type ContentfulSkillsSysContentType = {
    readonly sys: Maybe<ContentfulSkillsSysContentTypeSys>
  }

  type ContentfulSkillsSysContentTypeSys = {
    readonly type: Maybe<Scalars['String']>
    readonly linkType: Maybe<Scalars['String']>
    readonly id: Maybe<Scalars['String']>
  }

  type contentfulSkillsSkillsItemJsonNode = Node & {
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
    readonly aboutMe: Maybe<Scalars['String']>
    readonly skills1: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly skills2: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly skills3: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly sys: Maybe<contentfulSkillsSkillsItemJsonNodeSys>
  }

  type contentfulSkillsSkillsItemJsonNodeSys = {
    readonly type: Maybe<Scalars['String']>
  }

  type contentfulBlogPostBodyContentTextNode = Node & {
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
    readonly bodyContent: Maybe<Scalars['String']>
    readonly sys: Maybe<contentfulBlogPostBodyContentTextNodeSys>
    /** Returns all children nodes filtered by type MarkdownRemark */
    readonly childrenMarkdownRemark: Maybe<ReadonlyArray<Maybe<MarkdownRemark>>>
    /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
    readonly childMarkdownRemark: Maybe<MarkdownRemark>
  }

  type contentfulBlogPostBodyContentTextNodeSys = {
    readonly type: Maybe<Scalars['String']>
  }

  type ContentfulContentType = Node & {
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
    readonly name: Maybe<Scalars['String']>
    readonly displayField: Maybe<Scalars['String']>
    readonly description: Maybe<Scalars['String']>
    readonly sys: Maybe<ContentfulContentTypeSys>
  }

  type ContentfulContentTypeSys = {
    readonly type: Maybe<Scalars['String']>
  }

  type SiteBuildMetadata = Node & {
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
    readonly buildTime: Maybe<Scalars['Date']>
  }

  type SiteBuildMetadata_buildTimeArgs = {
    formatString: Maybe<Scalars['String']>
    fromNow: Maybe<Scalars['Boolean']>
    difference: Maybe<Scalars['String']>
    locale: Maybe<Scalars['String']>
  }

  type SitePlugin = Node & {
    readonly id: Scalars['ID']
    readonly parent: Maybe<Node>
    readonly children: ReadonlyArray<Node>
    readonly internal: Internal
    readonly resolve: Maybe<Scalars['String']>
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
    readonly pluginOptions: Maybe<SitePluginPluginOptions>
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly pluginFilepath: Maybe<Scalars['String']>
    readonly packageJson: Maybe<SitePluginPackageJson>
  }

  type SitePluginPluginOptions = {
    readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>
    readonly trackingId: Maybe<Scalars['String']>
    readonly anonymize: Maybe<Scalars['Boolean']>
    readonly head: Maybe<Scalars['Boolean']>
    readonly respectDNT: Maybe<Scalars['Boolean']>
    readonly pageTransitionDelay: Maybe<Scalars['Int']>
    readonly displayName: Maybe<Scalars['Boolean']>
    readonly fileName: Maybe<Scalars['Boolean']>
    readonly minify: Maybe<Scalars['Boolean']>
    readonly namespace: Maybe<Scalars['String']>
    readonly transpileTemplateLiterals: Maybe<Scalars['Boolean']>
    readonly pure: Maybe<Scalars['Boolean']>
    readonly base64Width: Maybe<Scalars['Int']>
    readonly stripMetadata: Maybe<Scalars['Boolean']>
    readonly defaultQuality: Maybe<Scalars['Int']>
    readonly failOnError: Maybe<Scalars['Boolean']>
    readonly maxWidth: Maybe<Scalars['Int']>
    readonly offsetY: Maybe<Scalars['Int']>
    readonly className: Maybe<Scalars['String']>
    readonly classPrefix: Maybe<Scalars['String']>
    readonly aliases: Maybe<SitePluginPluginOptionsAliases>
    readonly showLineNumbers: Maybe<Scalars['Boolean']>
    readonly numberLines: Maybe<Scalars['Boolean']>
    readonly noInlineHighlight: Maybe<Scalars['Boolean']>
    readonly prompt: Maybe<SitePluginPluginOptionsPrompt>
    readonly light: Maybe<SitePluginPluginOptionsLight>
    readonly dark: Maybe<SitePluginPluginOptionsDark>
    readonly name: Maybe<Scalars['String']>
    readonly short_name: Maybe<Scalars['String']>
    readonly start_url: Maybe<Scalars['String']>
    readonly background_color: Maybe<Scalars['String']>
    readonly theme_color: Maybe<Scalars['String']>
    readonly display: Maybe<Scalars['String']>
    readonly icon: Maybe<Scalars['String']>
    readonly legacy: Maybe<Scalars['Boolean']>
    readonly theme_color_in_head: Maybe<Scalars['Boolean']>
    readonly cache_busting_mode: Maybe<Scalars['String']>
    readonly crossOrigin: Maybe<Scalars['String']>
    readonly include_favicon: Maybe<Scalars['Boolean']>
    readonly cacheDigest: Maybe<Scalars['String']>
    readonly component: Maybe<Scalars['String']>
    readonly isTSX: Maybe<Scalars['Boolean']>
    readonly jsxPragma: Maybe<Scalars['String']>
    readonly allExtensions: Maybe<Scalars['Boolean']>
    readonly path: Maybe<Scalars['String']>
    readonly spaceId: Maybe<Scalars['String']>
    readonly accessToken: Maybe<Scalars['String']>
    readonly downloadLocal: Maybe<Scalars['Boolean']>
    readonly host: Maybe<Scalars['String']>
    readonly environment: Maybe<Scalars['String']>
    readonly forceFullSync: Maybe<Scalars['Boolean']>
    readonly pageLimit: Maybe<Scalars['Int']>
    readonly assetDownloadWorkers: Maybe<Scalars['Int']>
    readonly useNameForId: Maybe<Scalars['Boolean']>
    readonly query: Maybe<Scalars['String']>
    readonly output: Maybe<Scalars['String']>
    readonly createLinkInHead: Maybe<Scalars['Boolean']>
    readonly policy: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPolicy>>>
    readonly outputPath: Maybe<Scalars['String']>
    readonly pathCheck: Maybe<Scalars['Boolean']>
  }

  type SitePluginPluginOptionsPlugins = {
    readonly resolve: Maybe<Scalars['String']>
    readonly id: Maybe<Scalars['String']>
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
    readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly pluginFilepath: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsPluginsPluginOptions = {
    readonly plugins: Maybe<
      ReadonlyArray<Maybe<SitePluginPluginOptionsPluginsPluginOptionsPlugins>>
    >
    readonly maxWidth: Maybe<Scalars['Int']>
    readonly offsetY: Maybe<Scalars['Int']>
    readonly className: Maybe<Scalars['String']>
    readonly classPrefix: Maybe<Scalars['String']>
    readonly aliases: Maybe<SitePluginPluginOptionsPluginsPluginOptionsAliases>
    readonly showLineNumbers: Maybe<Scalars['Boolean']>
    readonly numberLines: Maybe<Scalars['Boolean']>
    readonly noInlineHighlight: Maybe<Scalars['Boolean']>
    readonly prompt: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPrompt>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPlugins = {
    readonly resolve: Maybe<Scalars['String']>
    readonly id: Maybe<Scalars['String']>
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
    readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptions>
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly pluginFilepath: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptions = {
    readonly offsetY: Maybe<Scalars['Int']>
    readonly className: Maybe<Scalars['String']>
    readonly classPrefix: Maybe<Scalars['String']>
    readonly aliases: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptionsAliases>
    readonly showLineNumbers: Maybe<Scalars['Boolean']>
    readonly numberLines: Maybe<Scalars['Boolean']>
    readonly noInlineHighlight: Maybe<Scalars['Boolean']>
    readonly prompt: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptionsPrompt>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptionsAliases = {
    readonly sh: Maybe<Scalars['String']>
    readonly es6: Maybe<Scalars['String']>
    readonly env: Maybe<Scalars['String']>
    readonly mdx: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptionsPrompt = {
    readonly user: Maybe<Scalars['String']>
    readonly host: Maybe<Scalars['String']>
    readonly global: Maybe<Scalars['Boolean']>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsAliases = {
    readonly sh: Maybe<Scalars['String']>
    readonly es6: Maybe<Scalars['String']>
    readonly env: Maybe<Scalars['String']>
    readonly mdx: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPrompt = {
    readonly user: Maybe<Scalars['String']>
    readonly host: Maybe<Scalars['String']>
    readonly global: Maybe<Scalars['Boolean']>
  }

  type SitePluginPluginOptionsAliases = {
    readonly sh: Maybe<Scalars['String']>
    readonly es6: Maybe<Scalars['String']>
    readonly env: Maybe<Scalars['String']>
    readonly mdx: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsPrompt = {
    readonly user: Maybe<Scalars['String']>
    readonly host: Maybe<Scalars['String']>
    readonly global: Maybe<Scalars['Boolean']>
  }

  type SitePluginPluginOptionsLight = {
    readonly breakpoint: Maybe<SitePluginPluginOptionsLightBreakpoint>
    readonly palette: Maybe<SitePluginPluginOptionsLightPalette>
    readonly textColor: Maybe<Scalars['String']>
    readonly mainBg: Maybe<Scalars['String']>
    readonly secondary: Maybe<Scalars['String']>
    readonly primary: Maybe<Scalars['String']>
    readonly mainBgDark: Maybe<Scalars['String']>
    readonly borderColor: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsLightBreakpoint = {
    readonly mobile: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsLightPalette = {
    readonly background: Maybe<Scalars['String']>
    readonly blue: Maybe<Scalars['String']>
    readonly red: Maybe<Scalars['String']>
    readonly grey: Maybe<Scalars['String']>
    readonly black: Maybe<Scalars['String']>
    readonly white: Maybe<Scalars['String']>
    readonly orange: Maybe<Scalars['String']>
    readonly darkBlack: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsDark = {
    readonly breakpoint: Maybe<SitePluginPluginOptionsDarkBreakpoint>
    readonly palette: Maybe<SitePluginPluginOptionsDarkPalette>
    readonly textColor: Maybe<Scalars['String']>
    readonly mainBg: Maybe<Scalars['String']>
    readonly secondary: Maybe<Scalars['String']>
    readonly primary: Maybe<Scalars['String']>
    readonly mainBgDark: Maybe<Scalars['String']>
    readonly borderColor: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsDarkBreakpoint = {
    readonly mobile: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsDarkPalette = {
    readonly background: Maybe<Scalars['String']>
    readonly blue: Maybe<Scalars['String']>
    readonly red: Maybe<Scalars['String']>
    readonly grey: Maybe<Scalars['String']>
    readonly black: Maybe<Scalars['String']>
    readonly white: Maybe<Scalars['String']>
    readonly orange: Maybe<Scalars['String']>
    readonly darkBlack: Maybe<Scalars['String']>
  }

  type SitePluginPluginOptionsPolicy = {
    readonly userAgent: Maybe<Scalars['String']>
    readonly allow: Maybe<Scalars['String']>
  }

  type SitePluginPackageJson = {
    readonly name: Maybe<Scalars['String']>
    readonly description: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
    readonly main: Maybe<Scalars['String']>
    readonly license: Maybe<Scalars['String']>
    readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>
    readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>
    readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>
    readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  }

  type SitePluginPackageJsonDependencies = {
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
  }

  type SitePluginPackageJsonDevDependencies = {
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
  }

  type SitePluginPackageJsonPeerDependencies = {
    readonly name: Maybe<Scalars['String']>
    readonly version: Maybe<Scalars['String']>
  }

  type Query = {
    readonly file: Maybe<File>
    readonly allFile: FileConnection
    readonly directory: Maybe<Directory>
    readonly allDirectory: DirectoryConnection
    readonly site: Maybe<Site>
    readonly allSite: SiteConnection
    readonly sitePage: Maybe<SitePage>
    readonly allSitePage: SitePageConnection
    readonly imageSharp: Maybe<ImageSharp>
    readonly allImageSharp: ImageSharpConnection
    readonly markdownRemark: Maybe<MarkdownRemark>
    readonly allMarkdownRemark: MarkdownRemarkConnection
    readonly contentfulEntry: Maybe<ContentfulEntry>
    readonly allContentfulEntry: ContentfulEntryConnection
    readonly contentfulAsset: Maybe<ContentfulAsset>
    readonly allContentfulAsset: ContentfulAssetConnection
    readonly contentfulBlogPost: Maybe<ContentfulBlogPost>
    readonly allContentfulBlogPost: ContentfulBlogPostConnection
    readonly contentfulSkills: Maybe<ContentfulSkills>
    readonly allContentfulSkills: ContentfulSkillsConnection
    readonly contentfulSkillsSkillsItemJsonNode: Maybe<contentfulSkillsSkillsItemJsonNode>
    readonly allContentfulSkillsSkillsItemJsonNode: contentfulSkillsSkillsItemJsonNodeConnection
    readonly contentfulBlogPostBodyContentTextNode: Maybe<contentfulBlogPostBodyContentTextNode>
    readonly allContentfulBlogPostBodyContentTextNode: contentfulBlogPostBodyContentTextNodeConnection
    readonly contentfulContentType: Maybe<ContentfulContentType>
    readonly allContentfulContentType: ContentfulContentTypeConnection
    readonly siteBuildMetadata: Maybe<SiteBuildMetadata>
    readonly allSiteBuildMetadata: SiteBuildMetadataConnection
    readonly sitePlugin: Maybe<SitePlugin>
    readonly allSitePlugin: SitePluginConnection
  }

  type Query_fileArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>
    absolutePath: Maybe<StringQueryOperatorInput>
    relativePath: Maybe<StringQueryOperatorInput>
    extension: Maybe<StringQueryOperatorInput>
    size: Maybe<IntQueryOperatorInput>
    prettySize: Maybe<StringQueryOperatorInput>
    modifiedTime: Maybe<DateQueryOperatorInput>
    accessTime: Maybe<DateQueryOperatorInput>
    changeTime: Maybe<DateQueryOperatorInput>
    birthTime: Maybe<DateQueryOperatorInput>
    root: Maybe<StringQueryOperatorInput>
    dir: Maybe<StringQueryOperatorInput>
    base: Maybe<StringQueryOperatorInput>
    ext: Maybe<StringQueryOperatorInput>
    name: Maybe<StringQueryOperatorInput>
    relativeDirectory: Maybe<StringQueryOperatorInput>
    dev: Maybe<IntQueryOperatorInput>
    mode: Maybe<IntQueryOperatorInput>
    nlink: Maybe<IntQueryOperatorInput>
    uid: Maybe<IntQueryOperatorInput>
    gid: Maybe<IntQueryOperatorInput>
    rdev: Maybe<IntQueryOperatorInput>
    ino: Maybe<FloatQueryOperatorInput>
    atimeMs: Maybe<FloatQueryOperatorInput>
    mtimeMs: Maybe<FloatQueryOperatorInput>
    ctimeMs: Maybe<FloatQueryOperatorInput>
    atime: Maybe<DateQueryOperatorInput>
    mtime: Maybe<DateQueryOperatorInput>
    ctime: Maybe<DateQueryOperatorInput>
    birthtime: Maybe<DateQueryOperatorInput>
    birthtimeMs: Maybe<FloatQueryOperatorInput>
    blksize: Maybe<IntQueryOperatorInput>
    blocks: Maybe<IntQueryOperatorInput>
    url: Maybe<StringQueryOperatorInput>
    publicURL: Maybe<StringQueryOperatorInput>
    childrenImageSharp: Maybe<ImageSharpFilterListInput>
    childImageSharp: Maybe<ImageSharpFilterInput>
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allFileArgs = {
    filter: Maybe<FileFilterInput>
    sort: Maybe<FileSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_directoryArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>
    absolutePath: Maybe<StringQueryOperatorInput>
    relativePath: Maybe<StringQueryOperatorInput>
    extension: Maybe<StringQueryOperatorInput>
    size: Maybe<IntQueryOperatorInput>
    prettySize: Maybe<StringQueryOperatorInput>
    modifiedTime: Maybe<DateQueryOperatorInput>
    accessTime: Maybe<DateQueryOperatorInput>
    changeTime: Maybe<DateQueryOperatorInput>
    birthTime: Maybe<DateQueryOperatorInput>
    root: Maybe<StringQueryOperatorInput>
    dir: Maybe<StringQueryOperatorInput>
    base: Maybe<StringQueryOperatorInput>
    ext: Maybe<StringQueryOperatorInput>
    name: Maybe<StringQueryOperatorInput>
    relativeDirectory: Maybe<StringQueryOperatorInput>
    dev: Maybe<IntQueryOperatorInput>
    mode: Maybe<IntQueryOperatorInput>
    nlink: Maybe<IntQueryOperatorInput>
    uid: Maybe<IntQueryOperatorInput>
    gid: Maybe<IntQueryOperatorInput>
    rdev: Maybe<IntQueryOperatorInput>
    ino: Maybe<FloatQueryOperatorInput>
    atimeMs: Maybe<FloatQueryOperatorInput>
    mtimeMs: Maybe<FloatQueryOperatorInput>
    ctimeMs: Maybe<FloatQueryOperatorInput>
    atime: Maybe<DateQueryOperatorInput>
    mtime: Maybe<DateQueryOperatorInput>
    ctime: Maybe<DateQueryOperatorInput>
    birthtime: Maybe<DateQueryOperatorInput>
    birthtimeMs: Maybe<FloatQueryOperatorInput>
    blksize: Maybe<IntQueryOperatorInput>
    blocks: Maybe<IntQueryOperatorInput>
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allDirectoryArgs = {
    filter: Maybe<DirectoryFilterInput>
    sort: Maybe<DirectorySortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_siteArgs = {
    buildTime: Maybe<DateQueryOperatorInput>
    siteMetadata: Maybe<SiteSiteMetadataFilterInput>
    port: Maybe<IntQueryOperatorInput>
    host: Maybe<StringQueryOperatorInput>
    flags: Maybe<SiteFlagsFilterInput>
    polyfill: Maybe<BooleanQueryOperatorInput>
    pathPrefix: Maybe<StringQueryOperatorInput>
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allSiteArgs = {
    filter: Maybe<SiteFilterInput>
    sort: Maybe<SiteSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_sitePageArgs = {
    path: Maybe<StringQueryOperatorInput>
    component: Maybe<StringQueryOperatorInput>
    internalComponentName: Maybe<StringQueryOperatorInput>
    componentChunkName: Maybe<StringQueryOperatorInput>
    matchPath: Maybe<StringQueryOperatorInput>
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
    isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>
    context: Maybe<SitePageContextFilterInput>
    pluginCreator: Maybe<SitePluginFilterInput>
    pluginCreatorId: Maybe<StringQueryOperatorInput>
    componentPath: Maybe<StringQueryOperatorInput>
  }

  type Query_allSitePageArgs = {
    filter: Maybe<SitePageFilterInput>
    sort: Maybe<SitePageSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_imageSharpArgs = {
    fixed: Maybe<ImageSharpFixedFilterInput>
    fluid: Maybe<ImageSharpFluidFilterInput>
    gatsbyImageData: Maybe<JSONQueryOperatorInput>
    original: Maybe<ImageSharpOriginalFilterInput>
    resize: Maybe<ImageSharpResizeFilterInput>
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allImageSharpArgs = {
    filter: Maybe<ImageSharpFilterInput>
    sort: Maybe<ImageSharpSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_markdownRemarkArgs = {
    id: Maybe<StringQueryOperatorInput>
    frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>
    excerpt: Maybe<StringQueryOperatorInput>
    rawMarkdownBody: Maybe<StringQueryOperatorInput>
    html: Maybe<StringQueryOperatorInput>
    htmlAst: Maybe<JSONQueryOperatorInput>
    excerptAst: Maybe<JSONQueryOperatorInput>
    headings: Maybe<MarkdownHeadingFilterListInput>
    timeToRead: Maybe<IntQueryOperatorInput>
    tableOfContents: Maybe<StringQueryOperatorInput>
    wordCount: Maybe<MarkdownWordCountFilterInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allMarkdownRemarkArgs = {
    filter: Maybe<MarkdownRemarkFilterInput>
    sort: Maybe<MarkdownRemarkSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_contentfulEntryArgs = {
    contentful_id: Maybe<StringQueryOperatorInput>
    id: Maybe<StringQueryOperatorInput>
    node_locale: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allContentfulEntryArgs = {
    filter: Maybe<ContentfulEntryFilterInput>
    sort: Maybe<ContentfulEntrySortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_contentfulAssetArgs = {
    contentful_id: Maybe<StringQueryOperatorInput>
    id: Maybe<StringQueryOperatorInput>
    spaceId: Maybe<StringQueryOperatorInput>
    createdAt: Maybe<DateQueryOperatorInput>
    updatedAt: Maybe<DateQueryOperatorInput>
    file: Maybe<ContentfulAssetFileFilterInput>
    title: Maybe<StringQueryOperatorInput>
    description: Maybe<StringQueryOperatorInput>
    node_locale: Maybe<StringQueryOperatorInput>
    sys: Maybe<ContentfulAssetSysFilterInput>
    localFile: Maybe<FileFilterInput>
    fixed: Maybe<ContentfulFixedFilterInput>
    fluid: Maybe<ContentfulFluidFilterInput>
    gatsbyImageData: Maybe<JSONQueryOperatorInput>
    resize: Maybe<ContentfulResizeFilterInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allContentfulAssetArgs = {
    filter: Maybe<ContentfulAssetFilterInput>
    sort: Maybe<ContentfulAssetSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_contentfulBlogPostArgs = {
    contentful_id: Maybe<StringQueryOperatorInput>
    id: Maybe<StringQueryOperatorInput>
    node_locale: Maybe<StringQueryOperatorInput>
    title: Maybe<StringQueryOperatorInput>
    slug: Maybe<StringQueryOperatorInput>
    publishedDate: Maybe<DateQueryOperatorInput>
    image: Maybe<ContentfulAssetFilterInput>
    bodyContent: Maybe<contentfulBlogPostBodyContentTextNodeFilterInput>
    spaceId: Maybe<StringQueryOperatorInput>
    createdAt: Maybe<DateQueryOperatorInput>
    updatedAt: Maybe<DateQueryOperatorInput>
    sys: Maybe<ContentfulBlogPostSysFilterInput>
    childrenContentfulBlogPostBodyContentTextNode: Maybe<contentfulBlogPostBodyContentTextNodeFilterListInput>
    childContentfulBlogPostBodyContentTextNode: Maybe<contentfulBlogPostBodyContentTextNodeFilterInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allContentfulBlogPostArgs = {
    filter: Maybe<ContentfulBlogPostFilterInput>
    sort: Maybe<ContentfulBlogPostSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_contentfulSkillsArgs = {
    contentful_id: Maybe<StringQueryOperatorInput>
    id: Maybe<StringQueryOperatorInput>
    node_locale: Maybe<StringQueryOperatorInput>
    skillsItem: Maybe<contentfulSkillsSkillsItemJsonNodeFilterInput>
    spaceId: Maybe<StringQueryOperatorInput>
    createdAt: Maybe<DateQueryOperatorInput>
    updatedAt: Maybe<DateQueryOperatorInput>
    sys: Maybe<ContentfulSkillsSysFilterInput>
    childrenContentfulSkillsSkillsItemJsonNode: Maybe<contentfulSkillsSkillsItemJsonNodeFilterListInput>
    childContentfulSkillsSkillsItemJsonNode: Maybe<contentfulSkillsSkillsItemJsonNodeFilterInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
  }

  type Query_allContentfulSkillsArgs = {
    filter: Maybe<ContentfulSkillsFilterInput>
    sort: Maybe<ContentfulSkillsSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_contentfulSkillsSkillsItemJsonNodeArgs = {
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
    aboutMe: Maybe<StringQueryOperatorInput>
    skills1: Maybe<StringQueryOperatorInput>
    skills2: Maybe<StringQueryOperatorInput>
    skills3: Maybe<StringQueryOperatorInput>
    sys: Maybe<contentfulSkillsSkillsItemJsonNodeSysFilterInput>
  }

  type Query_allContentfulSkillsSkillsItemJsonNodeArgs = {
    filter: Maybe<contentfulSkillsSkillsItemJsonNodeFilterInput>
    sort: Maybe<contentfulSkillsSkillsItemJsonNodeSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_contentfulBlogPostBodyContentTextNodeArgs = {
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
    bodyContent: Maybe<StringQueryOperatorInput>
    sys: Maybe<contentfulBlogPostBodyContentTextNodeSysFilterInput>
    childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>
    childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>
  }

  type Query_allContentfulBlogPostBodyContentTextNodeArgs = {
    filter: Maybe<contentfulBlogPostBodyContentTextNodeFilterInput>
    sort: Maybe<contentfulBlogPostBodyContentTextNodeSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_contentfulContentTypeArgs = {
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
    name: Maybe<StringQueryOperatorInput>
    displayField: Maybe<StringQueryOperatorInput>
    description: Maybe<StringQueryOperatorInput>
    sys: Maybe<ContentfulContentTypeSysFilterInput>
  }

  type Query_allContentfulContentTypeArgs = {
    filter: Maybe<ContentfulContentTypeFilterInput>
    sort: Maybe<ContentfulContentTypeSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_siteBuildMetadataArgs = {
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
    buildTime: Maybe<DateQueryOperatorInput>
  }

  type Query_allSiteBuildMetadataArgs = {
    filter: Maybe<SiteBuildMetadataFilterInput>
    sort: Maybe<SiteBuildMetadataSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type Query_sitePluginArgs = {
    id: Maybe<StringQueryOperatorInput>
    parent: Maybe<NodeFilterInput>
    children: Maybe<NodeFilterListInput>
    internal: Maybe<InternalFilterInput>
    resolve: Maybe<StringQueryOperatorInput>
    name: Maybe<StringQueryOperatorInput>
    version: Maybe<StringQueryOperatorInput>
    pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>
    nodeAPIs: Maybe<StringQueryOperatorInput>
    browserAPIs: Maybe<StringQueryOperatorInput>
    ssrAPIs: Maybe<StringQueryOperatorInput>
    pluginFilepath: Maybe<StringQueryOperatorInput>
    packageJson: Maybe<SitePluginPackageJsonFilterInput>
  }

  type Query_allSitePluginArgs = {
    filter: Maybe<SitePluginFilterInput>
    sort: Maybe<SitePluginSortInput>
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
  }

  type StringQueryOperatorInput = {
    readonly eq: Maybe<Scalars['String']>
    readonly ne: Maybe<Scalars['String']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
    readonly regex: Maybe<Scalars['String']>
    readonly glob: Maybe<Scalars['String']>
  }

  type IntQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Int']>
    readonly ne: Maybe<Scalars['Int']>
    readonly gt: Maybe<Scalars['Int']>
    readonly gte: Maybe<Scalars['Int']>
    readonly lt: Maybe<Scalars['Int']>
    readonly lte: Maybe<Scalars['Int']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
  }

  type DateQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Date']>
    readonly ne: Maybe<Scalars['Date']>
    readonly gt: Maybe<Scalars['Date']>
    readonly gte: Maybe<Scalars['Date']>
    readonly lt: Maybe<Scalars['Date']>
    readonly lte: Maybe<Scalars['Date']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
  }

  type FloatQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Float']>
    readonly ne: Maybe<Scalars['Float']>
    readonly gt: Maybe<Scalars['Float']>
    readonly gte: Maybe<Scalars['Float']>
    readonly lt: Maybe<Scalars['Float']>
    readonly lte: Maybe<Scalars['Float']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
  }

  type ImageSharpFilterListInput = {
    readonly elemMatch: Maybe<ImageSharpFilterInput>
  }

  type ImageSharpFilterInput = {
    readonly fixed: Maybe<ImageSharpFixedFilterInput>
    readonly fluid: Maybe<ImageSharpFluidFilterInput>
    readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>
    readonly original: Maybe<ImageSharpOriginalFilterInput>
    readonly resize: Maybe<ImageSharpResizeFilterInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type ImageSharpFixedFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
    readonly width: Maybe<FloatQueryOperatorInput>
    readonly height: Maybe<FloatQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
    readonly srcSet: Maybe<StringQueryOperatorInput>
    readonly srcWebp: Maybe<StringQueryOperatorInput>
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>
    readonly originalName: Maybe<StringQueryOperatorInput>
  }

  type ImageSharpFluidFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
    readonly srcSet: Maybe<StringQueryOperatorInput>
    readonly srcWebp: Maybe<StringQueryOperatorInput>
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>
    readonly sizes: Maybe<StringQueryOperatorInput>
    readonly originalImg: Maybe<StringQueryOperatorInput>
    readonly originalName: Maybe<StringQueryOperatorInput>
    readonly presentationWidth: Maybe<IntQueryOperatorInput>
    readonly presentationHeight: Maybe<IntQueryOperatorInput>
  }

  type JSONQueryOperatorInput = {
    readonly eq: Maybe<Scalars['JSON']>
    readonly ne: Maybe<Scalars['JSON']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>
    readonly regex: Maybe<Scalars['JSON']>
    readonly glob: Maybe<Scalars['JSON']>
  }

  type ImageSharpOriginalFilterInput = {
    readonly width: Maybe<FloatQueryOperatorInput>
    readonly height: Maybe<FloatQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
  }

  type ImageSharpResizeFilterInput = {
    readonly src: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly width: Maybe<IntQueryOperatorInput>
    readonly height: Maybe<IntQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
    readonly originalName: Maybe<StringQueryOperatorInput>
  }

  type NodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type NodeFilterListInput = {
    readonly elemMatch: Maybe<NodeFilterInput>
  }

  type InternalFilterInput = {
    readonly content: Maybe<StringQueryOperatorInput>
    readonly contentDigest: Maybe<StringQueryOperatorInput>
    readonly description: Maybe<StringQueryOperatorInput>
    readonly fieldOwners: Maybe<StringQueryOperatorInput>
    readonly ignoreType: Maybe<BooleanQueryOperatorInput>
    readonly mediaType: Maybe<StringQueryOperatorInput>
    readonly owner: Maybe<StringQueryOperatorInput>
    readonly type: Maybe<StringQueryOperatorInput>
  }

  type BooleanQueryOperatorInput = {
    readonly eq: Maybe<Scalars['Boolean']>
    readonly ne: Maybe<Scalars['Boolean']>
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
  }

  type FileConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<FileEdge>
    readonly nodes: ReadonlyArray<File>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<FileGroupConnection>
  }

  type FileConnection_distinctArgs = {
    field: FileFieldsEnum
  }

  type FileConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: FileFieldsEnum
  }

  type FileEdge = {
    readonly next: Maybe<File>
    readonly node: File
    readonly previous: Maybe<File>
  }

  type PageInfo = {
    readonly currentPage: Scalars['Int']
    readonly hasPreviousPage: Scalars['Boolean']
    readonly hasNextPage: Scalars['Boolean']
    readonly itemCount: Scalars['Int']
    readonly pageCount: Scalars['Int']
    readonly perPage: Maybe<Scalars['Int']>
    readonly totalCount: Scalars['Int']
  }

  type FileFieldsEnum =
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
    | 'url'
    | 'publicURL'
    | 'childrenImageSharp'
    | 'childrenImageSharp.fixed.base64'
    | 'childrenImageSharp.fixed.tracedSVG'
    | 'childrenImageSharp.fixed.aspectRatio'
    | 'childrenImageSharp.fixed.width'
    | 'childrenImageSharp.fixed.height'
    | 'childrenImageSharp.fixed.src'
    | 'childrenImageSharp.fixed.srcSet'
    | 'childrenImageSharp.fixed.srcWebp'
    | 'childrenImageSharp.fixed.srcSetWebp'
    | 'childrenImageSharp.fixed.originalName'
    | 'childrenImageSharp.fluid.base64'
    | 'childrenImageSharp.fluid.tracedSVG'
    | 'childrenImageSharp.fluid.aspectRatio'
    | 'childrenImageSharp.fluid.src'
    | 'childrenImageSharp.fluid.srcSet'
    | 'childrenImageSharp.fluid.srcWebp'
    | 'childrenImageSharp.fluid.srcSetWebp'
    | 'childrenImageSharp.fluid.sizes'
    | 'childrenImageSharp.fluid.originalImg'
    | 'childrenImageSharp.fluid.originalName'
    | 'childrenImageSharp.fluid.presentationWidth'
    | 'childrenImageSharp.fluid.presentationHeight'
    | 'childrenImageSharp.gatsbyImageData'
    | 'childrenImageSharp.original.width'
    | 'childrenImageSharp.original.height'
    | 'childrenImageSharp.original.src'
    | 'childrenImageSharp.resize.src'
    | 'childrenImageSharp.resize.tracedSVG'
    | 'childrenImageSharp.resize.width'
    | 'childrenImageSharp.resize.height'
    | 'childrenImageSharp.resize.aspectRatio'
    | 'childrenImageSharp.resize.originalName'
    | 'childrenImageSharp.id'
    | 'childrenImageSharp.parent.id'
    | 'childrenImageSharp.parent.parent.id'
    | 'childrenImageSharp.parent.parent.children'
    | 'childrenImageSharp.parent.children'
    | 'childrenImageSharp.parent.children.id'
    | 'childrenImageSharp.parent.children.children'
    | 'childrenImageSharp.parent.internal.content'
    | 'childrenImageSharp.parent.internal.contentDigest'
    | 'childrenImageSharp.parent.internal.description'
    | 'childrenImageSharp.parent.internal.fieldOwners'
    | 'childrenImageSharp.parent.internal.ignoreType'
    | 'childrenImageSharp.parent.internal.mediaType'
    | 'childrenImageSharp.parent.internal.owner'
    | 'childrenImageSharp.parent.internal.type'
    | 'childrenImageSharp.children'
    | 'childrenImageSharp.children.id'
    | 'childrenImageSharp.children.parent.id'
    | 'childrenImageSharp.children.parent.children'
    | 'childrenImageSharp.children.children'
    | 'childrenImageSharp.children.children.id'
    | 'childrenImageSharp.children.children.children'
    | 'childrenImageSharp.children.internal.content'
    | 'childrenImageSharp.children.internal.contentDigest'
    | 'childrenImageSharp.children.internal.description'
    | 'childrenImageSharp.children.internal.fieldOwners'
    | 'childrenImageSharp.children.internal.ignoreType'
    | 'childrenImageSharp.children.internal.mediaType'
    | 'childrenImageSharp.children.internal.owner'
    | 'childrenImageSharp.children.internal.type'
    | 'childrenImageSharp.internal.content'
    | 'childrenImageSharp.internal.contentDigest'
    | 'childrenImageSharp.internal.description'
    | 'childrenImageSharp.internal.fieldOwners'
    | 'childrenImageSharp.internal.ignoreType'
    | 'childrenImageSharp.internal.mediaType'
    | 'childrenImageSharp.internal.owner'
    | 'childrenImageSharp.internal.type'
    | 'childImageSharp.fixed.base64'
    | 'childImageSharp.fixed.tracedSVG'
    | 'childImageSharp.fixed.aspectRatio'
    | 'childImageSharp.fixed.width'
    | 'childImageSharp.fixed.height'
    | 'childImageSharp.fixed.src'
    | 'childImageSharp.fixed.srcSet'
    | 'childImageSharp.fixed.srcWebp'
    | 'childImageSharp.fixed.srcSetWebp'
    | 'childImageSharp.fixed.originalName'
    | 'childImageSharp.fluid.base64'
    | 'childImageSharp.fluid.tracedSVG'
    | 'childImageSharp.fluid.aspectRatio'
    | 'childImageSharp.fluid.src'
    | 'childImageSharp.fluid.srcSet'
    | 'childImageSharp.fluid.srcWebp'
    | 'childImageSharp.fluid.srcSetWebp'
    | 'childImageSharp.fluid.sizes'
    | 'childImageSharp.fluid.originalImg'
    | 'childImageSharp.fluid.originalName'
    | 'childImageSharp.fluid.presentationWidth'
    | 'childImageSharp.fluid.presentationHeight'
    | 'childImageSharp.gatsbyImageData'
    | 'childImageSharp.original.width'
    | 'childImageSharp.original.height'
    | 'childImageSharp.original.src'
    | 'childImageSharp.resize.src'
    | 'childImageSharp.resize.tracedSVG'
    | 'childImageSharp.resize.width'
    | 'childImageSharp.resize.height'
    | 'childImageSharp.resize.aspectRatio'
    | 'childImageSharp.resize.originalName'
    | 'childImageSharp.id'
    | 'childImageSharp.parent.id'
    | 'childImageSharp.parent.parent.id'
    | 'childImageSharp.parent.parent.children'
    | 'childImageSharp.parent.children'
    | 'childImageSharp.parent.children.id'
    | 'childImageSharp.parent.children.children'
    | 'childImageSharp.parent.internal.content'
    | 'childImageSharp.parent.internal.contentDigest'
    | 'childImageSharp.parent.internal.description'
    | 'childImageSharp.parent.internal.fieldOwners'
    | 'childImageSharp.parent.internal.ignoreType'
    | 'childImageSharp.parent.internal.mediaType'
    | 'childImageSharp.parent.internal.owner'
    | 'childImageSharp.parent.internal.type'
    | 'childImageSharp.children'
    | 'childImageSharp.children.id'
    | 'childImageSharp.children.parent.id'
    | 'childImageSharp.children.parent.children'
    | 'childImageSharp.children.children'
    | 'childImageSharp.children.children.id'
    | 'childImageSharp.children.children.children'
    | 'childImageSharp.children.internal.content'
    | 'childImageSharp.children.internal.contentDigest'
    | 'childImageSharp.children.internal.description'
    | 'childImageSharp.children.internal.fieldOwners'
    | 'childImageSharp.children.internal.ignoreType'
    | 'childImageSharp.children.internal.mediaType'
    | 'childImageSharp.children.internal.owner'
    | 'childImageSharp.children.internal.type'
    | 'childImageSharp.internal.content'
    | 'childImageSharp.internal.contentDigest'
    | 'childImageSharp.internal.description'
    | 'childImageSharp.internal.fieldOwners'
    | 'childImageSharp.internal.ignoreType'
    | 'childImageSharp.internal.mediaType'
    | 'childImageSharp.internal.owner'
    | 'childImageSharp.internal.type'
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type FileGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<FileEdge>
    readonly nodes: ReadonlyArray<File>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type FileFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>
    readonly absolutePath: Maybe<StringQueryOperatorInput>
    readonly relativePath: Maybe<StringQueryOperatorInput>
    readonly extension: Maybe<StringQueryOperatorInput>
    readonly size: Maybe<IntQueryOperatorInput>
    readonly prettySize: Maybe<StringQueryOperatorInput>
    readonly modifiedTime: Maybe<DateQueryOperatorInput>
    readonly accessTime: Maybe<DateQueryOperatorInput>
    readonly changeTime: Maybe<DateQueryOperatorInput>
    readonly birthTime: Maybe<DateQueryOperatorInput>
    readonly root: Maybe<StringQueryOperatorInput>
    readonly dir: Maybe<StringQueryOperatorInput>
    readonly base: Maybe<StringQueryOperatorInput>
    readonly ext: Maybe<StringQueryOperatorInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>
    readonly dev: Maybe<IntQueryOperatorInput>
    readonly mode: Maybe<IntQueryOperatorInput>
    readonly nlink: Maybe<IntQueryOperatorInput>
    readonly uid: Maybe<IntQueryOperatorInput>
    readonly gid: Maybe<IntQueryOperatorInput>
    readonly rdev: Maybe<IntQueryOperatorInput>
    readonly ino: Maybe<FloatQueryOperatorInput>
    readonly atimeMs: Maybe<FloatQueryOperatorInput>
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>
    readonly atime: Maybe<DateQueryOperatorInput>
    readonly mtime: Maybe<DateQueryOperatorInput>
    readonly ctime: Maybe<DateQueryOperatorInput>
    readonly birthtime: Maybe<DateQueryOperatorInput>
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>
    readonly blksize: Maybe<IntQueryOperatorInput>
    readonly blocks: Maybe<IntQueryOperatorInput>
    readonly url: Maybe<StringQueryOperatorInput>
    readonly publicURL: Maybe<StringQueryOperatorInput>
    readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>
    readonly childImageSharp: Maybe<ImageSharpFilterInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type FileSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type SortOrderEnum = 'ASC' | 'DESC'

  type DirectoryConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<DirectoryEdge>
    readonly nodes: ReadonlyArray<Directory>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<DirectoryGroupConnection>
  }

  type DirectoryConnection_distinctArgs = {
    field: DirectoryFieldsEnum
  }

  type DirectoryConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: DirectoryFieldsEnum
  }

  type DirectoryEdge = {
    readonly next: Maybe<Directory>
    readonly node: Directory
    readonly previous: Maybe<Directory>
  }

  type DirectoryFieldsEnum =
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
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type DirectoryGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<DirectoryEdge>
    readonly nodes: ReadonlyArray<Directory>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type DirectoryFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>
    readonly absolutePath: Maybe<StringQueryOperatorInput>
    readonly relativePath: Maybe<StringQueryOperatorInput>
    readonly extension: Maybe<StringQueryOperatorInput>
    readonly size: Maybe<IntQueryOperatorInput>
    readonly prettySize: Maybe<StringQueryOperatorInput>
    readonly modifiedTime: Maybe<DateQueryOperatorInput>
    readonly accessTime: Maybe<DateQueryOperatorInput>
    readonly changeTime: Maybe<DateQueryOperatorInput>
    readonly birthTime: Maybe<DateQueryOperatorInput>
    readonly root: Maybe<StringQueryOperatorInput>
    readonly dir: Maybe<StringQueryOperatorInput>
    readonly base: Maybe<StringQueryOperatorInput>
    readonly ext: Maybe<StringQueryOperatorInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>
    readonly dev: Maybe<IntQueryOperatorInput>
    readonly mode: Maybe<IntQueryOperatorInput>
    readonly nlink: Maybe<IntQueryOperatorInput>
    readonly uid: Maybe<IntQueryOperatorInput>
    readonly gid: Maybe<IntQueryOperatorInput>
    readonly rdev: Maybe<IntQueryOperatorInput>
    readonly ino: Maybe<FloatQueryOperatorInput>
    readonly atimeMs: Maybe<FloatQueryOperatorInput>
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>
    readonly atime: Maybe<DateQueryOperatorInput>
    readonly mtime: Maybe<DateQueryOperatorInput>
    readonly ctime: Maybe<DateQueryOperatorInput>
    readonly birthtime: Maybe<DateQueryOperatorInput>
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>
    readonly blksize: Maybe<IntQueryOperatorInput>
    readonly blocks: Maybe<IntQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type DirectorySortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type SiteSiteMetadataFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>
    readonly description: Maybe<StringQueryOperatorInput>
    readonly author: Maybe<StringQueryOperatorInput>
    readonly siteUrl: Maybe<StringQueryOperatorInput>
    readonly defaultImage: Maybe<StringQueryOperatorInput>
  }

  type SiteFlagsFilterInput = {
    readonly DEV_SSR: Maybe<BooleanQueryOperatorInput>
    readonly FAST_DEV: Maybe<BooleanQueryOperatorInput>
  }

  type SiteConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SiteEdge>
    readonly nodes: ReadonlyArray<Site>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<SiteGroupConnection>
  }

  type SiteConnection_distinctArgs = {
    field: SiteFieldsEnum
  }

  type SiteConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: SiteFieldsEnum
  }

  type SiteEdge = {
    readonly next: Maybe<Site>
    readonly node: Site
    readonly previous: Maybe<Site>
  }

  type SiteFieldsEnum =
    | 'buildTime'
    | 'siteMetadata.title'
    | 'siteMetadata.description'
    | 'siteMetadata.author'
    | 'siteMetadata.siteUrl'
    | 'siteMetadata.defaultImage'
    | 'port'
    | 'host'
    | 'flags.DEV_SSR'
    | 'flags.FAST_DEV'
    | 'polyfill'
    | 'pathPrefix'
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type SiteGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SiteEdge>
    readonly nodes: ReadonlyArray<Site>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type SiteFilterInput = {
    readonly buildTime: Maybe<DateQueryOperatorInput>
    readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>
    readonly port: Maybe<IntQueryOperatorInput>
    readonly host: Maybe<StringQueryOperatorInput>
    readonly flags: Maybe<SiteFlagsFilterInput>
    readonly polyfill: Maybe<BooleanQueryOperatorInput>
    readonly pathPrefix: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type SiteSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type SitePageContextFilterInput = {
    readonly slug: Maybe<StringQueryOperatorInput>
  }

  type SitePluginFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
    readonly resolve: Maybe<StringQueryOperatorInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
    readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>
    readonly browserAPIs: Maybe<StringQueryOperatorInput>
    readonly ssrAPIs: Maybe<StringQueryOperatorInput>
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>
    readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>
  }

  type SitePluginPluginOptionsFilterInput = {
    readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>
    readonly trackingId: Maybe<StringQueryOperatorInput>
    readonly anonymize: Maybe<BooleanQueryOperatorInput>
    readonly head: Maybe<BooleanQueryOperatorInput>
    readonly respectDNT: Maybe<BooleanQueryOperatorInput>
    readonly pageTransitionDelay: Maybe<IntQueryOperatorInput>
    readonly displayName: Maybe<BooleanQueryOperatorInput>
    readonly fileName: Maybe<BooleanQueryOperatorInput>
    readonly minify: Maybe<BooleanQueryOperatorInput>
    readonly namespace: Maybe<StringQueryOperatorInput>
    readonly transpileTemplateLiterals: Maybe<BooleanQueryOperatorInput>
    readonly pure: Maybe<BooleanQueryOperatorInput>
    readonly base64Width: Maybe<IntQueryOperatorInput>
    readonly stripMetadata: Maybe<BooleanQueryOperatorInput>
    readonly defaultQuality: Maybe<IntQueryOperatorInput>
    readonly failOnError: Maybe<BooleanQueryOperatorInput>
    readonly maxWidth: Maybe<IntQueryOperatorInput>
    readonly offsetY: Maybe<IntQueryOperatorInput>
    readonly className: Maybe<StringQueryOperatorInput>
    readonly classPrefix: Maybe<StringQueryOperatorInput>
    readonly aliases: Maybe<SitePluginPluginOptionsAliasesFilterInput>
    readonly showLineNumbers: Maybe<BooleanQueryOperatorInput>
    readonly numberLines: Maybe<BooleanQueryOperatorInput>
    readonly noInlineHighlight: Maybe<BooleanQueryOperatorInput>
    readonly prompt: Maybe<SitePluginPluginOptionsPromptFilterInput>
    readonly light: Maybe<SitePluginPluginOptionsLightFilterInput>
    readonly dark: Maybe<SitePluginPluginOptionsDarkFilterInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly short_name: Maybe<StringQueryOperatorInput>
    readonly start_url: Maybe<StringQueryOperatorInput>
    readonly background_color: Maybe<StringQueryOperatorInput>
    readonly theme_color: Maybe<StringQueryOperatorInput>
    readonly display: Maybe<StringQueryOperatorInput>
    readonly icon: Maybe<StringQueryOperatorInput>
    readonly legacy: Maybe<BooleanQueryOperatorInput>
    readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>
    readonly cache_busting_mode: Maybe<StringQueryOperatorInput>
    readonly crossOrigin: Maybe<StringQueryOperatorInput>
    readonly include_favicon: Maybe<BooleanQueryOperatorInput>
    readonly cacheDigest: Maybe<StringQueryOperatorInput>
    readonly component: Maybe<StringQueryOperatorInput>
    readonly isTSX: Maybe<BooleanQueryOperatorInput>
    readonly jsxPragma: Maybe<StringQueryOperatorInput>
    readonly allExtensions: Maybe<BooleanQueryOperatorInput>
    readonly path: Maybe<StringQueryOperatorInput>
    readonly spaceId: Maybe<StringQueryOperatorInput>
    readonly accessToken: Maybe<StringQueryOperatorInput>
    readonly downloadLocal: Maybe<BooleanQueryOperatorInput>
    readonly host: Maybe<StringQueryOperatorInput>
    readonly environment: Maybe<StringQueryOperatorInput>
    readonly forceFullSync: Maybe<BooleanQueryOperatorInput>
    readonly pageLimit: Maybe<IntQueryOperatorInput>
    readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>
    readonly useNameForId: Maybe<BooleanQueryOperatorInput>
    readonly query: Maybe<StringQueryOperatorInput>
    readonly output: Maybe<StringQueryOperatorInput>
    readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>
    readonly policy: Maybe<SitePluginPluginOptionsPolicyFilterListInput>
    readonly outputPath: Maybe<StringQueryOperatorInput>
    readonly pathCheck: Maybe<BooleanQueryOperatorInput>
  }

  type SitePluginPluginOptionsPluginsFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>
  }

  type SitePluginPluginOptionsPluginsFilterInput = {
    readonly resolve: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
    readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>
    readonly browserAPIs: Maybe<StringQueryOperatorInput>
    readonly ssrAPIs: Maybe<StringQueryOperatorInput>
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
    readonly plugins: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPluginsFilterListInput>
    readonly maxWidth: Maybe<IntQueryOperatorInput>
    readonly offsetY: Maybe<IntQueryOperatorInput>
    readonly className: Maybe<StringQueryOperatorInput>
    readonly classPrefix: Maybe<StringQueryOperatorInput>
    readonly aliases: Maybe<SitePluginPluginOptionsPluginsPluginOptionsAliasesFilterInput>
    readonly showLineNumbers: Maybe<BooleanQueryOperatorInput>
    readonly numberLines: Maybe<BooleanQueryOperatorInput>
    readonly noInlineHighlight: Maybe<BooleanQueryOperatorInput>
    readonly prompt: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPromptFilterInput>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPluginsFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPluginsFilterInput>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPluginsFilterInput = {
    readonly resolve: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
    readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptionsFilterInput>
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>
    readonly browserAPIs: Maybe<StringQueryOperatorInput>
    readonly ssrAPIs: Maybe<StringQueryOperatorInput>
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptionsFilterInput = {
    readonly offsetY: Maybe<IntQueryOperatorInput>
    readonly className: Maybe<StringQueryOperatorInput>
    readonly classPrefix: Maybe<StringQueryOperatorInput>
    readonly aliases: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptionsAliasesFilterInput>
    readonly showLineNumbers: Maybe<BooleanQueryOperatorInput>
    readonly numberLines: Maybe<BooleanQueryOperatorInput>
    readonly noInlineHighlight: Maybe<BooleanQueryOperatorInput>
    readonly prompt: Maybe<SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptionsPromptFilterInput>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptionsAliasesFilterInput = {
    readonly sh: Maybe<StringQueryOperatorInput>
    readonly es6: Maybe<StringQueryOperatorInput>
    readonly env: Maybe<StringQueryOperatorInput>
    readonly mdx: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPluginsPluginOptionsPromptFilterInput = {
    readonly user: Maybe<StringQueryOperatorInput>
    readonly host: Maybe<StringQueryOperatorInput>
    readonly global: Maybe<BooleanQueryOperatorInput>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsAliasesFilterInput = {
    readonly sh: Maybe<StringQueryOperatorInput>
    readonly es6: Maybe<StringQueryOperatorInput>
    readonly env: Maybe<StringQueryOperatorInput>
    readonly mdx: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsPluginsPluginOptionsPromptFilterInput = {
    readonly user: Maybe<StringQueryOperatorInput>
    readonly host: Maybe<StringQueryOperatorInput>
    readonly global: Maybe<BooleanQueryOperatorInput>
  }

  type SitePluginPluginOptionsAliasesFilterInput = {
    readonly sh: Maybe<StringQueryOperatorInput>
    readonly es6: Maybe<StringQueryOperatorInput>
    readonly env: Maybe<StringQueryOperatorInput>
    readonly mdx: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsPromptFilterInput = {
    readonly user: Maybe<StringQueryOperatorInput>
    readonly host: Maybe<StringQueryOperatorInput>
    readonly global: Maybe<BooleanQueryOperatorInput>
  }

  type SitePluginPluginOptionsLightFilterInput = {
    readonly breakpoint: Maybe<SitePluginPluginOptionsLightBreakpointFilterInput>
    readonly palette: Maybe<SitePluginPluginOptionsLightPaletteFilterInput>
    readonly textColor: Maybe<StringQueryOperatorInput>
    readonly mainBg: Maybe<StringQueryOperatorInput>
    readonly secondary: Maybe<StringQueryOperatorInput>
    readonly primary: Maybe<StringQueryOperatorInput>
    readonly mainBgDark: Maybe<StringQueryOperatorInput>
    readonly borderColor: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsLightBreakpointFilterInput = {
    readonly mobile: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsLightPaletteFilterInput = {
    readonly background: Maybe<StringQueryOperatorInput>
    readonly blue: Maybe<StringQueryOperatorInput>
    readonly red: Maybe<StringQueryOperatorInput>
    readonly grey: Maybe<StringQueryOperatorInput>
    readonly black: Maybe<StringQueryOperatorInput>
    readonly white: Maybe<StringQueryOperatorInput>
    readonly orange: Maybe<StringQueryOperatorInput>
    readonly darkBlack: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsDarkFilterInput = {
    readonly breakpoint: Maybe<SitePluginPluginOptionsDarkBreakpointFilterInput>
    readonly palette: Maybe<SitePluginPluginOptionsDarkPaletteFilterInput>
    readonly textColor: Maybe<StringQueryOperatorInput>
    readonly mainBg: Maybe<StringQueryOperatorInput>
    readonly secondary: Maybe<StringQueryOperatorInput>
    readonly primary: Maybe<StringQueryOperatorInput>
    readonly mainBgDark: Maybe<StringQueryOperatorInput>
    readonly borderColor: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsDarkBreakpointFilterInput = {
    readonly mobile: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsDarkPaletteFilterInput = {
    readonly background: Maybe<StringQueryOperatorInput>
    readonly blue: Maybe<StringQueryOperatorInput>
    readonly red: Maybe<StringQueryOperatorInput>
    readonly grey: Maybe<StringQueryOperatorInput>
    readonly black: Maybe<StringQueryOperatorInput>
    readonly white: Maybe<StringQueryOperatorInput>
    readonly orange: Maybe<StringQueryOperatorInput>
    readonly darkBlack: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPluginOptionsPolicyFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPluginOptionsPolicyFilterInput>
  }

  type SitePluginPluginOptionsPolicyFilterInput = {
    readonly userAgent: Maybe<StringQueryOperatorInput>
    readonly allow: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPackageJsonFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>
    readonly description: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
    readonly main: Maybe<StringQueryOperatorInput>
    readonly license: Maybe<StringQueryOperatorInput>
    readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
    readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
    readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
    readonly keywords: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPackageJsonDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>
  }

  type SitePluginPackageJsonDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPackageJsonDevDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
  }

  type SitePluginPackageJsonDevDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
  }

  type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
  }

  type SitePluginPackageJsonPeerDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>
    readonly version: Maybe<StringQueryOperatorInput>
  }

  type SitePageConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SitePageEdge>
    readonly nodes: ReadonlyArray<SitePage>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<SitePageGroupConnection>
  }

  type SitePageConnection_distinctArgs = {
    field: SitePageFieldsEnum
  }

  type SitePageConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: SitePageFieldsEnum
  }

  type SitePageEdge = {
    readonly next: Maybe<SitePage>
    readonly node: SitePage
    readonly previous: Maybe<SitePage>
  }

  type SitePageFieldsEnum =
    | 'path'
    | 'component'
    | 'internalComponentName'
    | 'componentChunkName'
    | 'matchPath'
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'isCreatedByStatefulCreatePages'
    | 'context.slug'
    | 'pluginCreator.id'
    | 'pluginCreator.parent.id'
    | 'pluginCreator.parent.parent.id'
    | 'pluginCreator.parent.parent.children'
    | 'pluginCreator.parent.children'
    | 'pluginCreator.parent.children.id'
    | 'pluginCreator.parent.children.children'
    | 'pluginCreator.parent.internal.content'
    | 'pluginCreator.parent.internal.contentDigest'
    | 'pluginCreator.parent.internal.description'
    | 'pluginCreator.parent.internal.fieldOwners'
    | 'pluginCreator.parent.internal.ignoreType'
    | 'pluginCreator.parent.internal.mediaType'
    | 'pluginCreator.parent.internal.owner'
    | 'pluginCreator.parent.internal.type'
    | 'pluginCreator.children'
    | 'pluginCreator.children.id'
    | 'pluginCreator.children.parent.id'
    | 'pluginCreator.children.parent.children'
    | 'pluginCreator.children.children'
    | 'pluginCreator.children.children.id'
    | 'pluginCreator.children.children.children'
    | 'pluginCreator.children.internal.content'
    | 'pluginCreator.children.internal.contentDigest'
    | 'pluginCreator.children.internal.description'
    | 'pluginCreator.children.internal.fieldOwners'
    | 'pluginCreator.children.internal.ignoreType'
    | 'pluginCreator.children.internal.mediaType'
    | 'pluginCreator.children.internal.owner'
    | 'pluginCreator.children.internal.type'
    | 'pluginCreator.internal.content'
    | 'pluginCreator.internal.contentDigest'
    | 'pluginCreator.internal.description'
    | 'pluginCreator.internal.fieldOwners'
    | 'pluginCreator.internal.ignoreType'
    | 'pluginCreator.internal.mediaType'
    | 'pluginCreator.internal.owner'
    | 'pluginCreator.internal.type'
    | 'pluginCreator.resolve'
    | 'pluginCreator.name'
    | 'pluginCreator.version'
    | 'pluginCreator.pluginOptions.plugins'
    | 'pluginCreator.pluginOptions.plugins.resolve'
    | 'pluginCreator.pluginOptions.plugins.id'
    | 'pluginCreator.pluginOptions.plugins.name'
    | 'pluginCreator.pluginOptions.plugins.version'
    | 'pluginCreator.pluginOptions.plugins.nodeAPIs'
    | 'pluginCreator.pluginOptions.plugins.browserAPIs'
    | 'pluginCreator.pluginOptions.plugins.ssrAPIs'
    | 'pluginCreator.pluginOptions.plugins.pluginFilepath'
    | 'pluginCreator.pluginOptions.trackingId'
    | 'pluginCreator.pluginOptions.anonymize'
    | 'pluginCreator.pluginOptions.head'
    | 'pluginCreator.pluginOptions.respectDNT'
    | 'pluginCreator.pluginOptions.pageTransitionDelay'
    | 'pluginCreator.pluginOptions.displayName'
    | 'pluginCreator.pluginOptions.fileName'
    | 'pluginCreator.pluginOptions.minify'
    | 'pluginCreator.pluginOptions.namespace'
    | 'pluginCreator.pluginOptions.transpileTemplateLiterals'
    | 'pluginCreator.pluginOptions.pure'
    | 'pluginCreator.pluginOptions.base64Width'
    | 'pluginCreator.pluginOptions.stripMetadata'
    | 'pluginCreator.pluginOptions.defaultQuality'
    | 'pluginCreator.pluginOptions.failOnError'
    | 'pluginCreator.pluginOptions.maxWidth'
    | 'pluginCreator.pluginOptions.offsetY'
    | 'pluginCreator.pluginOptions.className'
    | 'pluginCreator.pluginOptions.classPrefix'
    | 'pluginCreator.pluginOptions.aliases.sh'
    | 'pluginCreator.pluginOptions.aliases.es6'
    | 'pluginCreator.pluginOptions.aliases.env'
    | 'pluginCreator.pluginOptions.aliases.mdx'
    | 'pluginCreator.pluginOptions.showLineNumbers'
    | 'pluginCreator.pluginOptions.numberLines'
    | 'pluginCreator.pluginOptions.noInlineHighlight'
    | 'pluginCreator.pluginOptions.prompt.user'
    | 'pluginCreator.pluginOptions.prompt.host'
    | 'pluginCreator.pluginOptions.prompt.global'
    | 'pluginCreator.pluginOptions.light.textColor'
    | 'pluginCreator.pluginOptions.light.mainBg'
    | 'pluginCreator.pluginOptions.light.secondary'
    | 'pluginCreator.pluginOptions.light.primary'
    | 'pluginCreator.pluginOptions.light.mainBgDark'
    | 'pluginCreator.pluginOptions.light.borderColor'
    | 'pluginCreator.pluginOptions.dark.textColor'
    | 'pluginCreator.pluginOptions.dark.mainBg'
    | 'pluginCreator.pluginOptions.dark.secondary'
    | 'pluginCreator.pluginOptions.dark.primary'
    | 'pluginCreator.pluginOptions.dark.mainBgDark'
    | 'pluginCreator.pluginOptions.dark.borderColor'
    | 'pluginCreator.pluginOptions.name'
    | 'pluginCreator.pluginOptions.short_name'
    | 'pluginCreator.pluginOptions.start_url'
    | 'pluginCreator.pluginOptions.background_color'
    | 'pluginCreator.pluginOptions.theme_color'
    | 'pluginCreator.pluginOptions.display'
    | 'pluginCreator.pluginOptions.icon'
    | 'pluginCreator.pluginOptions.legacy'
    | 'pluginCreator.pluginOptions.theme_color_in_head'
    | 'pluginCreator.pluginOptions.cache_busting_mode'
    | 'pluginCreator.pluginOptions.crossOrigin'
    | 'pluginCreator.pluginOptions.include_favicon'
    | 'pluginCreator.pluginOptions.cacheDigest'
    | 'pluginCreator.pluginOptions.component'
    | 'pluginCreator.pluginOptions.isTSX'
    | 'pluginCreator.pluginOptions.jsxPragma'
    | 'pluginCreator.pluginOptions.allExtensions'
    | 'pluginCreator.pluginOptions.path'
    | 'pluginCreator.pluginOptions.spaceId'
    | 'pluginCreator.pluginOptions.accessToken'
    | 'pluginCreator.pluginOptions.downloadLocal'
    | 'pluginCreator.pluginOptions.host'
    | 'pluginCreator.pluginOptions.environment'
    | 'pluginCreator.pluginOptions.forceFullSync'
    | 'pluginCreator.pluginOptions.pageLimit'
    | 'pluginCreator.pluginOptions.assetDownloadWorkers'
    | 'pluginCreator.pluginOptions.useNameForId'
    | 'pluginCreator.pluginOptions.query'
    | 'pluginCreator.pluginOptions.output'
    | 'pluginCreator.pluginOptions.createLinkInHead'
    | 'pluginCreator.pluginOptions.policy'
    | 'pluginCreator.pluginOptions.policy.userAgent'
    | 'pluginCreator.pluginOptions.policy.allow'
    | 'pluginCreator.pluginOptions.outputPath'
    | 'pluginCreator.pluginOptions.pathCheck'
    | 'pluginCreator.nodeAPIs'
    | 'pluginCreator.browserAPIs'
    | 'pluginCreator.ssrAPIs'
    | 'pluginCreator.pluginFilepath'
    | 'pluginCreator.packageJson.name'
    | 'pluginCreator.packageJson.description'
    | 'pluginCreator.packageJson.version'
    | 'pluginCreator.packageJson.main'
    | 'pluginCreator.packageJson.license'
    | 'pluginCreator.packageJson.dependencies'
    | 'pluginCreator.packageJson.dependencies.name'
    | 'pluginCreator.packageJson.dependencies.version'
    | 'pluginCreator.packageJson.devDependencies'
    | 'pluginCreator.packageJson.devDependencies.name'
    | 'pluginCreator.packageJson.devDependencies.version'
    | 'pluginCreator.packageJson.peerDependencies'
    | 'pluginCreator.packageJson.peerDependencies.name'
    | 'pluginCreator.packageJson.peerDependencies.version'
    | 'pluginCreator.packageJson.keywords'
    | 'pluginCreatorId'
    | 'componentPath'

  type SitePageGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SitePageEdge>
    readonly nodes: ReadonlyArray<SitePage>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type SitePageFilterInput = {
    readonly path: Maybe<StringQueryOperatorInput>
    readonly component: Maybe<StringQueryOperatorInput>
    readonly internalComponentName: Maybe<StringQueryOperatorInput>
    readonly componentChunkName: Maybe<StringQueryOperatorInput>
    readonly matchPath: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
    readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>
    readonly context: Maybe<SitePageContextFilterInput>
    readonly pluginCreator: Maybe<SitePluginFilterInput>
    readonly pluginCreatorId: Maybe<StringQueryOperatorInput>
    readonly componentPath: Maybe<StringQueryOperatorInput>
  }

  type SitePageSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type ImageSharpConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ImageSharpEdge>
    readonly nodes: ReadonlyArray<ImageSharp>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<ImageSharpGroupConnection>
  }

  type ImageSharpConnection_distinctArgs = {
    field: ImageSharpFieldsEnum
  }

  type ImageSharpConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: ImageSharpFieldsEnum
  }

  type ImageSharpEdge = {
    readonly next: Maybe<ImageSharp>
    readonly node: ImageSharp
    readonly previous: Maybe<ImageSharp>
  }

  type ImageSharpFieldsEnum =
    | 'fixed.base64'
    | 'fixed.tracedSVG'
    | 'fixed.aspectRatio'
    | 'fixed.width'
    | 'fixed.height'
    | 'fixed.src'
    | 'fixed.srcSet'
    | 'fixed.srcWebp'
    | 'fixed.srcSetWebp'
    | 'fixed.originalName'
    | 'fluid.base64'
    | 'fluid.tracedSVG'
    | 'fluid.aspectRatio'
    | 'fluid.src'
    | 'fluid.srcSet'
    | 'fluid.srcWebp'
    | 'fluid.srcSetWebp'
    | 'fluid.sizes'
    | 'fluid.originalImg'
    | 'fluid.originalName'
    | 'fluid.presentationWidth'
    | 'fluid.presentationHeight'
    | 'gatsbyImageData'
    | 'original.width'
    | 'original.height'
    | 'original.src'
    | 'resize.src'
    | 'resize.tracedSVG'
    | 'resize.width'
    | 'resize.height'
    | 'resize.aspectRatio'
    | 'resize.originalName'
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type ImageSharpGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ImageSharpEdge>
    readonly nodes: ReadonlyArray<ImageSharp>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type ImageSharpSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type MarkdownRemarkFrontmatterFilterInput = {
    readonly title: Maybe<StringQueryOperatorInput>
  }

  type MarkdownHeadingFilterListInput = {
    readonly elemMatch: Maybe<MarkdownHeadingFilterInput>
  }

  type MarkdownHeadingFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly value: Maybe<StringQueryOperatorInput>
    readonly depth: Maybe<IntQueryOperatorInput>
  }

  type MarkdownWordCountFilterInput = {
    readonly paragraphs: Maybe<IntQueryOperatorInput>
    readonly sentences: Maybe<IntQueryOperatorInput>
    readonly words: Maybe<IntQueryOperatorInput>
  }

  type MarkdownRemarkConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<MarkdownRemarkEdge>
    readonly nodes: ReadonlyArray<MarkdownRemark>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>
  }

  type MarkdownRemarkConnection_distinctArgs = {
    field: MarkdownRemarkFieldsEnum
  }

  type MarkdownRemarkConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: MarkdownRemarkFieldsEnum
  }

  type MarkdownRemarkEdge = {
    readonly next: Maybe<MarkdownRemark>
    readonly node: MarkdownRemark
    readonly previous: Maybe<MarkdownRemark>
  }

  type MarkdownRemarkFieldsEnum =
    | 'id'
    | 'frontmatter.title'
    | 'excerpt'
    | 'rawMarkdownBody'
    | 'html'
    | 'htmlAst'
    | 'excerptAst'
    | 'headings'
    | 'headings.id'
    | 'headings.value'
    | 'headings.depth'
    | 'timeToRead'
    | 'tableOfContents'
    | 'wordCount.paragraphs'
    | 'wordCount.sentences'
    | 'wordCount.words'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type MarkdownRemarkGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<MarkdownRemarkEdge>
    readonly nodes: ReadonlyArray<MarkdownRemark>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type MarkdownRemarkFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>
    readonly excerpt: Maybe<StringQueryOperatorInput>
    readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>
    readonly html: Maybe<StringQueryOperatorInput>
    readonly htmlAst: Maybe<JSONQueryOperatorInput>
    readonly excerptAst: Maybe<JSONQueryOperatorInput>
    readonly headings: Maybe<MarkdownHeadingFilterListInput>
    readonly timeToRead: Maybe<IntQueryOperatorInput>
    readonly tableOfContents: Maybe<StringQueryOperatorInput>
    readonly wordCount: Maybe<MarkdownWordCountFilterInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type MarkdownRemarkSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type ContentfulEntryConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ContentfulEntryEdge>
    readonly nodes: ReadonlyArray<ContentfulEntry>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<ContentfulEntryGroupConnection>
  }

  type ContentfulEntryConnection_distinctArgs = {
    field: ContentfulEntryFieldsEnum
  }

  type ContentfulEntryConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: ContentfulEntryFieldsEnum
  }

  type ContentfulEntryEdge = {
    readonly next: Maybe<ContentfulEntry>
    readonly node: ContentfulEntry
    readonly previous: Maybe<ContentfulEntry>
  }

  type ContentfulEntryFieldsEnum =
    | 'contentful_id'
    | 'id'
    | 'node_locale'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type ContentfulEntryGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ContentfulEntryEdge>
    readonly nodes: ReadonlyArray<ContentfulEntry>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type ContentfulEntryFilterInput = {
    readonly contentful_id: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly node_locale: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type ContentfulEntrySortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type ContentfulAssetFileFilterInput = {
    readonly url: Maybe<StringQueryOperatorInput>
    readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>
    readonly fileName: Maybe<StringQueryOperatorInput>
    readonly contentType: Maybe<StringQueryOperatorInput>
  }

  type ContentfulAssetFileDetailsFilterInput = {
    readonly size: Maybe<IntQueryOperatorInput>
    readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>
  }

  type ContentfulAssetFileDetailsImageFilterInput = {
    readonly width: Maybe<IntQueryOperatorInput>
    readonly height: Maybe<IntQueryOperatorInput>
  }

  type ContentfulAssetSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>
    readonly revision: Maybe<IntQueryOperatorInput>
  }

  type ContentfulFixedFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
    readonly width: Maybe<FloatQueryOperatorInput>
    readonly height: Maybe<FloatQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
    readonly srcSet: Maybe<StringQueryOperatorInput>
    readonly srcWebp: Maybe<StringQueryOperatorInput>
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>
  }

  type ContentfulFluidFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
    readonly srcSet: Maybe<StringQueryOperatorInput>
    readonly srcWebp: Maybe<StringQueryOperatorInput>
    readonly srcSetWebp: Maybe<StringQueryOperatorInput>
    readonly sizes: Maybe<StringQueryOperatorInput>
  }

  type ContentfulResizeFilterInput = {
    readonly base64: Maybe<StringQueryOperatorInput>
    readonly tracedSVG: Maybe<StringQueryOperatorInput>
    readonly src: Maybe<StringQueryOperatorInput>
    readonly width: Maybe<IntQueryOperatorInput>
    readonly height: Maybe<IntQueryOperatorInput>
    readonly aspectRatio: Maybe<FloatQueryOperatorInput>
  }

  type ContentfulAssetConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ContentfulAssetEdge>
    readonly nodes: ReadonlyArray<ContentfulAsset>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<ContentfulAssetGroupConnection>
  }

  type ContentfulAssetConnection_distinctArgs = {
    field: ContentfulAssetFieldsEnum
  }

  type ContentfulAssetConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: ContentfulAssetFieldsEnum
  }

  type ContentfulAssetEdge = {
    readonly next: Maybe<ContentfulAsset>
    readonly node: ContentfulAsset
    readonly previous: Maybe<ContentfulAsset>
  }

  type ContentfulAssetFieldsEnum =
    | 'contentful_id'
    | 'id'
    | 'spaceId'
    | 'createdAt'
    | 'updatedAt'
    | 'file.url'
    | 'file.details.size'
    | 'file.details.image.width'
    | 'file.details.image.height'
    | 'file.fileName'
    | 'file.contentType'
    | 'title'
    | 'description'
    | 'node_locale'
    | 'sys.type'
    | 'sys.revision'
    | 'localFile.sourceInstanceName'
    | 'localFile.absolutePath'
    | 'localFile.relativePath'
    | 'localFile.extension'
    | 'localFile.size'
    | 'localFile.prettySize'
    | 'localFile.modifiedTime'
    | 'localFile.accessTime'
    | 'localFile.changeTime'
    | 'localFile.birthTime'
    | 'localFile.root'
    | 'localFile.dir'
    | 'localFile.base'
    | 'localFile.ext'
    | 'localFile.name'
    | 'localFile.relativeDirectory'
    | 'localFile.dev'
    | 'localFile.mode'
    | 'localFile.nlink'
    | 'localFile.uid'
    | 'localFile.gid'
    | 'localFile.rdev'
    | 'localFile.ino'
    | 'localFile.atimeMs'
    | 'localFile.mtimeMs'
    | 'localFile.ctimeMs'
    | 'localFile.atime'
    | 'localFile.mtime'
    | 'localFile.ctime'
    | 'localFile.birthtime'
    | 'localFile.birthtimeMs'
    | 'localFile.blksize'
    | 'localFile.blocks'
    | 'localFile.url'
    | 'localFile.publicURL'
    | 'localFile.childrenImageSharp'
    | 'localFile.childrenImageSharp.fixed.base64'
    | 'localFile.childrenImageSharp.fixed.tracedSVG'
    | 'localFile.childrenImageSharp.fixed.aspectRatio'
    | 'localFile.childrenImageSharp.fixed.width'
    | 'localFile.childrenImageSharp.fixed.height'
    | 'localFile.childrenImageSharp.fixed.src'
    | 'localFile.childrenImageSharp.fixed.srcSet'
    | 'localFile.childrenImageSharp.fixed.srcWebp'
    | 'localFile.childrenImageSharp.fixed.srcSetWebp'
    | 'localFile.childrenImageSharp.fixed.originalName'
    | 'localFile.childrenImageSharp.fluid.base64'
    | 'localFile.childrenImageSharp.fluid.tracedSVG'
    | 'localFile.childrenImageSharp.fluid.aspectRatio'
    | 'localFile.childrenImageSharp.fluid.src'
    | 'localFile.childrenImageSharp.fluid.srcSet'
    | 'localFile.childrenImageSharp.fluid.srcWebp'
    | 'localFile.childrenImageSharp.fluid.srcSetWebp'
    | 'localFile.childrenImageSharp.fluid.sizes'
    | 'localFile.childrenImageSharp.fluid.originalImg'
    | 'localFile.childrenImageSharp.fluid.originalName'
    | 'localFile.childrenImageSharp.fluid.presentationWidth'
    | 'localFile.childrenImageSharp.fluid.presentationHeight'
    | 'localFile.childrenImageSharp.gatsbyImageData'
    | 'localFile.childrenImageSharp.original.width'
    | 'localFile.childrenImageSharp.original.height'
    | 'localFile.childrenImageSharp.original.src'
    | 'localFile.childrenImageSharp.resize.src'
    | 'localFile.childrenImageSharp.resize.tracedSVG'
    | 'localFile.childrenImageSharp.resize.width'
    | 'localFile.childrenImageSharp.resize.height'
    | 'localFile.childrenImageSharp.resize.aspectRatio'
    | 'localFile.childrenImageSharp.resize.originalName'
    | 'localFile.childrenImageSharp.id'
    | 'localFile.childrenImageSharp.parent.id'
    | 'localFile.childrenImageSharp.parent.children'
    | 'localFile.childrenImageSharp.children'
    | 'localFile.childrenImageSharp.children.id'
    | 'localFile.childrenImageSharp.children.children'
    | 'localFile.childrenImageSharp.internal.content'
    | 'localFile.childrenImageSharp.internal.contentDigest'
    | 'localFile.childrenImageSharp.internal.description'
    | 'localFile.childrenImageSharp.internal.fieldOwners'
    | 'localFile.childrenImageSharp.internal.ignoreType'
    | 'localFile.childrenImageSharp.internal.mediaType'
    | 'localFile.childrenImageSharp.internal.owner'
    | 'localFile.childrenImageSharp.internal.type'
    | 'localFile.childImageSharp.fixed.base64'
    | 'localFile.childImageSharp.fixed.tracedSVG'
    | 'localFile.childImageSharp.fixed.aspectRatio'
    | 'localFile.childImageSharp.fixed.width'
    | 'localFile.childImageSharp.fixed.height'
    | 'localFile.childImageSharp.fixed.src'
    | 'localFile.childImageSharp.fixed.srcSet'
    | 'localFile.childImageSharp.fixed.srcWebp'
    | 'localFile.childImageSharp.fixed.srcSetWebp'
    | 'localFile.childImageSharp.fixed.originalName'
    | 'localFile.childImageSharp.fluid.base64'
    | 'localFile.childImageSharp.fluid.tracedSVG'
    | 'localFile.childImageSharp.fluid.aspectRatio'
    | 'localFile.childImageSharp.fluid.src'
    | 'localFile.childImageSharp.fluid.srcSet'
    | 'localFile.childImageSharp.fluid.srcWebp'
    | 'localFile.childImageSharp.fluid.srcSetWebp'
    | 'localFile.childImageSharp.fluid.sizes'
    | 'localFile.childImageSharp.fluid.originalImg'
    | 'localFile.childImageSharp.fluid.originalName'
    | 'localFile.childImageSharp.fluid.presentationWidth'
    | 'localFile.childImageSharp.fluid.presentationHeight'
    | 'localFile.childImageSharp.gatsbyImageData'
    | 'localFile.childImageSharp.original.width'
    | 'localFile.childImageSharp.original.height'
    | 'localFile.childImageSharp.original.src'
    | 'localFile.childImageSharp.resize.src'
    | 'localFile.childImageSharp.resize.tracedSVG'
    | 'localFile.childImageSharp.resize.width'
    | 'localFile.childImageSharp.resize.height'
    | 'localFile.childImageSharp.resize.aspectRatio'
    | 'localFile.childImageSharp.resize.originalName'
    | 'localFile.childImageSharp.id'
    | 'localFile.childImageSharp.parent.id'
    | 'localFile.childImageSharp.parent.children'
    | 'localFile.childImageSharp.children'
    | 'localFile.childImageSharp.children.id'
    | 'localFile.childImageSharp.children.children'
    | 'localFile.childImageSharp.internal.content'
    | 'localFile.childImageSharp.internal.contentDigest'
    | 'localFile.childImageSharp.internal.description'
    | 'localFile.childImageSharp.internal.fieldOwners'
    | 'localFile.childImageSharp.internal.ignoreType'
    | 'localFile.childImageSharp.internal.mediaType'
    | 'localFile.childImageSharp.internal.owner'
    | 'localFile.childImageSharp.internal.type'
    | 'localFile.id'
    | 'localFile.parent.id'
    | 'localFile.parent.parent.id'
    | 'localFile.parent.parent.children'
    | 'localFile.parent.children'
    | 'localFile.parent.children.id'
    | 'localFile.parent.children.children'
    | 'localFile.parent.internal.content'
    | 'localFile.parent.internal.contentDigest'
    | 'localFile.parent.internal.description'
    | 'localFile.parent.internal.fieldOwners'
    | 'localFile.parent.internal.ignoreType'
    | 'localFile.parent.internal.mediaType'
    | 'localFile.parent.internal.owner'
    | 'localFile.parent.internal.type'
    | 'localFile.children'
    | 'localFile.children.id'
    | 'localFile.children.parent.id'
    | 'localFile.children.parent.children'
    | 'localFile.children.children'
    | 'localFile.children.children.id'
    | 'localFile.children.children.children'
    | 'localFile.children.internal.content'
    | 'localFile.children.internal.contentDigest'
    | 'localFile.children.internal.description'
    | 'localFile.children.internal.fieldOwners'
    | 'localFile.children.internal.ignoreType'
    | 'localFile.children.internal.mediaType'
    | 'localFile.children.internal.owner'
    | 'localFile.children.internal.type'
    | 'localFile.internal.content'
    | 'localFile.internal.contentDigest'
    | 'localFile.internal.description'
    | 'localFile.internal.fieldOwners'
    | 'localFile.internal.ignoreType'
    | 'localFile.internal.mediaType'
    | 'localFile.internal.owner'
    | 'localFile.internal.type'
    | 'fixed.base64'
    | 'fixed.tracedSVG'
    | 'fixed.aspectRatio'
    | 'fixed.width'
    | 'fixed.height'
    | 'fixed.src'
    | 'fixed.srcSet'
    | 'fixed.srcWebp'
    | 'fixed.srcSetWebp'
    | 'fluid.base64'
    | 'fluid.tracedSVG'
    | 'fluid.aspectRatio'
    | 'fluid.src'
    | 'fluid.srcSet'
    | 'fluid.srcWebp'
    | 'fluid.srcSetWebp'
    | 'fluid.sizes'
    | 'gatsbyImageData'
    | 'resize.base64'
    | 'resize.tracedSVG'
    | 'resize.src'
    | 'resize.width'
    | 'resize.height'
    | 'resize.aspectRatio'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type ContentfulAssetGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ContentfulAssetEdge>
    readonly nodes: ReadonlyArray<ContentfulAsset>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type ContentfulAssetFilterInput = {
    readonly contentful_id: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly spaceId: Maybe<StringQueryOperatorInput>
    readonly createdAt: Maybe<DateQueryOperatorInput>
    readonly updatedAt: Maybe<DateQueryOperatorInput>
    readonly file: Maybe<ContentfulAssetFileFilterInput>
    readonly title: Maybe<StringQueryOperatorInput>
    readonly description: Maybe<StringQueryOperatorInput>
    readonly node_locale: Maybe<StringQueryOperatorInput>
    readonly sys: Maybe<ContentfulAssetSysFilterInput>
    readonly localFile: Maybe<FileFilterInput>
    readonly fixed: Maybe<ContentfulFixedFilterInput>
    readonly fluid: Maybe<ContentfulFluidFilterInput>
    readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>
    readonly resize: Maybe<ContentfulResizeFilterInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type ContentfulAssetSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type contentfulBlogPostBodyContentTextNodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
    readonly bodyContent: Maybe<StringQueryOperatorInput>
    readonly sys: Maybe<contentfulBlogPostBodyContentTextNodeSysFilterInput>
    readonly childrenMarkdownRemark: Maybe<MarkdownRemarkFilterListInput>
    readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>
  }

  type contentfulBlogPostBodyContentTextNodeSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>
  }

  type MarkdownRemarkFilterListInput = {
    readonly elemMatch: Maybe<MarkdownRemarkFilterInput>
  }

  type ContentfulBlogPostSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>
    readonly revision: Maybe<IntQueryOperatorInput>
    readonly contentType: Maybe<ContentfulBlogPostSysContentTypeFilterInput>
  }

  type ContentfulBlogPostSysContentTypeFilterInput = {
    readonly sys: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>
  }

  type ContentfulBlogPostSysContentTypeSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>
    readonly linkType: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
  }

  type contentfulBlogPostBodyContentTextNodeFilterListInput = {
    readonly elemMatch: Maybe<contentfulBlogPostBodyContentTextNodeFilterInput>
  }

  type ContentfulBlogPostConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ContentfulBlogPostEdge>
    readonly nodes: ReadonlyArray<ContentfulBlogPost>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<ContentfulBlogPostGroupConnection>
  }

  type ContentfulBlogPostConnection_distinctArgs = {
    field: ContentfulBlogPostFieldsEnum
  }

  type ContentfulBlogPostConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: ContentfulBlogPostFieldsEnum
  }

  type ContentfulBlogPostEdge = {
    readonly next: Maybe<ContentfulBlogPost>
    readonly node: ContentfulBlogPost
    readonly previous: Maybe<ContentfulBlogPost>
  }

  type ContentfulBlogPostFieldsEnum =
    | 'contentful_id'
    | 'id'
    | 'node_locale'
    | 'title'
    | 'slug'
    | 'publishedDate'
    | 'image.contentful_id'
    | 'image.id'
    | 'image.spaceId'
    | 'image.createdAt'
    | 'image.updatedAt'
    | 'image.file.url'
    | 'image.file.details.size'
    | 'image.file.fileName'
    | 'image.file.contentType'
    | 'image.title'
    | 'image.description'
    | 'image.node_locale'
    | 'image.sys.type'
    | 'image.sys.revision'
    | 'image.localFile.sourceInstanceName'
    | 'image.localFile.absolutePath'
    | 'image.localFile.relativePath'
    | 'image.localFile.extension'
    | 'image.localFile.size'
    | 'image.localFile.prettySize'
    | 'image.localFile.modifiedTime'
    | 'image.localFile.accessTime'
    | 'image.localFile.changeTime'
    | 'image.localFile.birthTime'
    | 'image.localFile.root'
    | 'image.localFile.dir'
    | 'image.localFile.base'
    | 'image.localFile.ext'
    | 'image.localFile.name'
    | 'image.localFile.relativeDirectory'
    | 'image.localFile.dev'
    | 'image.localFile.mode'
    | 'image.localFile.nlink'
    | 'image.localFile.uid'
    | 'image.localFile.gid'
    | 'image.localFile.rdev'
    | 'image.localFile.ino'
    | 'image.localFile.atimeMs'
    | 'image.localFile.mtimeMs'
    | 'image.localFile.ctimeMs'
    | 'image.localFile.atime'
    | 'image.localFile.mtime'
    | 'image.localFile.ctime'
    | 'image.localFile.birthtime'
    | 'image.localFile.birthtimeMs'
    | 'image.localFile.blksize'
    | 'image.localFile.blocks'
    | 'image.localFile.url'
    | 'image.localFile.publicURL'
    | 'image.localFile.childrenImageSharp'
    | 'image.localFile.childrenImageSharp.gatsbyImageData'
    | 'image.localFile.childrenImageSharp.id'
    | 'image.localFile.childrenImageSharp.children'
    | 'image.localFile.childImageSharp.gatsbyImageData'
    | 'image.localFile.childImageSharp.id'
    | 'image.localFile.childImageSharp.children'
    | 'image.localFile.id'
    | 'image.localFile.parent.id'
    | 'image.localFile.parent.children'
    | 'image.localFile.children'
    | 'image.localFile.children.id'
    | 'image.localFile.children.children'
    | 'image.localFile.internal.content'
    | 'image.localFile.internal.contentDigest'
    | 'image.localFile.internal.description'
    | 'image.localFile.internal.fieldOwners'
    | 'image.localFile.internal.ignoreType'
    | 'image.localFile.internal.mediaType'
    | 'image.localFile.internal.owner'
    | 'image.localFile.internal.type'
    | 'image.fixed.base64'
    | 'image.fixed.tracedSVG'
    | 'image.fixed.aspectRatio'
    | 'image.fixed.width'
    | 'image.fixed.height'
    | 'image.fixed.src'
    | 'image.fixed.srcSet'
    | 'image.fixed.srcWebp'
    | 'image.fixed.srcSetWebp'
    | 'image.fluid.base64'
    | 'image.fluid.tracedSVG'
    | 'image.fluid.aspectRatio'
    | 'image.fluid.src'
    | 'image.fluid.srcSet'
    | 'image.fluid.srcWebp'
    | 'image.fluid.srcSetWebp'
    | 'image.fluid.sizes'
    | 'image.gatsbyImageData'
    | 'image.resize.base64'
    | 'image.resize.tracedSVG'
    | 'image.resize.src'
    | 'image.resize.width'
    | 'image.resize.height'
    | 'image.resize.aspectRatio'
    | 'image.parent.id'
    | 'image.parent.parent.id'
    | 'image.parent.parent.children'
    | 'image.parent.children'
    | 'image.parent.children.id'
    | 'image.parent.children.children'
    | 'image.parent.internal.content'
    | 'image.parent.internal.contentDigest'
    | 'image.parent.internal.description'
    | 'image.parent.internal.fieldOwners'
    | 'image.parent.internal.ignoreType'
    | 'image.parent.internal.mediaType'
    | 'image.parent.internal.owner'
    | 'image.parent.internal.type'
    | 'image.children'
    | 'image.children.id'
    | 'image.children.parent.id'
    | 'image.children.parent.children'
    | 'image.children.children'
    | 'image.children.children.id'
    | 'image.children.children.children'
    | 'image.children.internal.content'
    | 'image.children.internal.contentDigest'
    | 'image.children.internal.description'
    | 'image.children.internal.fieldOwners'
    | 'image.children.internal.ignoreType'
    | 'image.children.internal.mediaType'
    | 'image.children.internal.owner'
    | 'image.children.internal.type'
    | 'image.internal.content'
    | 'image.internal.contentDigest'
    | 'image.internal.description'
    | 'image.internal.fieldOwners'
    | 'image.internal.ignoreType'
    | 'image.internal.mediaType'
    | 'image.internal.owner'
    | 'image.internal.type'
    | 'bodyContent.id'
    | 'bodyContent.parent.id'
    | 'bodyContent.parent.parent.id'
    | 'bodyContent.parent.parent.children'
    | 'bodyContent.parent.children'
    | 'bodyContent.parent.children.id'
    | 'bodyContent.parent.children.children'
    | 'bodyContent.parent.internal.content'
    | 'bodyContent.parent.internal.contentDigest'
    | 'bodyContent.parent.internal.description'
    | 'bodyContent.parent.internal.fieldOwners'
    | 'bodyContent.parent.internal.ignoreType'
    | 'bodyContent.parent.internal.mediaType'
    | 'bodyContent.parent.internal.owner'
    | 'bodyContent.parent.internal.type'
    | 'bodyContent.children'
    | 'bodyContent.children.id'
    | 'bodyContent.children.parent.id'
    | 'bodyContent.children.parent.children'
    | 'bodyContent.children.children'
    | 'bodyContent.children.children.id'
    | 'bodyContent.children.children.children'
    | 'bodyContent.children.internal.content'
    | 'bodyContent.children.internal.contentDigest'
    | 'bodyContent.children.internal.description'
    | 'bodyContent.children.internal.fieldOwners'
    | 'bodyContent.children.internal.ignoreType'
    | 'bodyContent.children.internal.mediaType'
    | 'bodyContent.children.internal.owner'
    | 'bodyContent.children.internal.type'
    | 'bodyContent.internal.content'
    | 'bodyContent.internal.contentDigest'
    | 'bodyContent.internal.description'
    | 'bodyContent.internal.fieldOwners'
    | 'bodyContent.internal.ignoreType'
    | 'bodyContent.internal.mediaType'
    | 'bodyContent.internal.owner'
    | 'bodyContent.internal.type'
    | 'bodyContent.bodyContent'
    | 'bodyContent.sys.type'
    | 'bodyContent.childrenMarkdownRemark'
    | 'bodyContent.childrenMarkdownRemark.id'
    | 'bodyContent.childrenMarkdownRemark.frontmatter.title'
    | 'bodyContent.childrenMarkdownRemark.excerpt'
    | 'bodyContent.childrenMarkdownRemark.rawMarkdownBody'
    | 'bodyContent.childrenMarkdownRemark.html'
    | 'bodyContent.childrenMarkdownRemark.htmlAst'
    | 'bodyContent.childrenMarkdownRemark.excerptAst'
    | 'bodyContent.childrenMarkdownRemark.headings'
    | 'bodyContent.childrenMarkdownRemark.headings.id'
    | 'bodyContent.childrenMarkdownRemark.headings.value'
    | 'bodyContent.childrenMarkdownRemark.headings.depth'
    | 'bodyContent.childrenMarkdownRemark.timeToRead'
    | 'bodyContent.childrenMarkdownRemark.tableOfContents'
    | 'bodyContent.childrenMarkdownRemark.wordCount.paragraphs'
    | 'bodyContent.childrenMarkdownRemark.wordCount.sentences'
    | 'bodyContent.childrenMarkdownRemark.wordCount.words'
    | 'bodyContent.childrenMarkdownRemark.parent.id'
    | 'bodyContent.childrenMarkdownRemark.parent.children'
    | 'bodyContent.childrenMarkdownRemark.children'
    | 'bodyContent.childrenMarkdownRemark.children.id'
    | 'bodyContent.childrenMarkdownRemark.children.children'
    | 'bodyContent.childrenMarkdownRemark.internal.content'
    | 'bodyContent.childrenMarkdownRemark.internal.contentDigest'
    | 'bodyContent.childrenMarkdownRemark.internal.description'
    | 'bodyContent.childrenMarkdownRemark.internal.fieldOwners'
    | 'bodyContent.childrenMarkdownRemark.internal.ignoreType'
    | 'bodyContent.childrenMarkdownRemark.internal.mediaType'
    | 'bodyContent.childrenMarkdownRemark.internal.owner'
    | 'bodyContent.childrenMarkdownRemark.internal.type'
    | 'bodyContent.childMarkdownRemark.id'
    | 'bodyContent.childMarkdownRemark.frontmatter.title'
    | 'bodyContent.childMarkdownRemark.excerpt'
    | 'bodyContent.childMarkdownRemark.rawMarkdownBody'
    | 'bodyContent.childMarkdownRemark.html'
    | 'bodyContent.childMarkdownRemark.htmlAst'
    | 'bodyContent.childMarkdownRemark.excerptAst'
    | 'bodyContent.childMarkdownRemark.headings'
    | 'bodyContent.childMarkdownRemark.headings.id'
    | 'bodyContent.childMarkdownRemark.headings.value'
    | 'bodyContent.childMarkdownRemark.headings.depth'
    | 'bodyContent.childMarkdownRemark.timeToRead'
    | 'bodyContent.childMarkdownRemark.tableOfContents'
    | 'bodyContent.childMarkdownRemark.wordCount.paragraphs'
    | 'bodyContent.childMarkdownRemark.wordCount.sentences'
    | 'bodyContent.childMarkdownRemark.wordCount.words'
    | 'bodyContent.childMarkdownRemark.parent.id'
    | 'bodyContent.childMarkdownRemark.parent.children'
    | 'bodyContent.childMarkdownRemark.children'
    | 'bodyContent.childMarkdownRemark.children.id'
    | 'bodyContent.childMarkdownRemark.children.children'
    | 'bodyContent.childMarkdownRemark.internal.content'
    | 'bodyContent.childMarkdownRemark.internal.contentDigest'
    | 'bodyContent.childMarkdownRemark.internal.description'
    | 'bodyContent.childMarkdownRemark.internal.fieldOwners'
    | 'bodyContent.childMarkdownRemark.internal.ignoreType'
    | 'bodyContent.childMarkdownRemark.internal.mediaType'
    | 'bodyContent.childMarkdownRemark.internal.owner'
    | 'bodyContent.childMarkdownRemark.internal.type'
    | 'spaceId'
    | 'createdAt'
    | 'updatedAt'
    | 'sys.type'
    | 'sys.revision'
    | 'sys.contentType.sys.type'
    | 'sys.contentType.sys.linkType'
    | 'sys.contentType.sys.id'
    | 'childrenContentfulBlogPostBodyContentTextNode'
    | 'childrenContentfulBlogPostBodyContentTextNode.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.parent.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.parent.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.children.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.children.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.internal.content'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.internal.contentDigest'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.internal.description'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.internal.fieldOwners'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.internal.ignoreType'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.internal.mediaType'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.internal.owner'
    | 'childrenContentfulBlogPostBodyContentTextNode.parent.internal.type'
    | 'childrenContentfulBlogPostBodyContentTextNode.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.parent.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.parent.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.children.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.children.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.internal.content'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.internal.contentDigest'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.internal.description'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.internal.fieldOwners'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.internal.ignoreType'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.internal.mediaType'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.internal.owner'
    | 'childrenContentfulBlogPostBodyContentTextNode.children.internal.type'
    | 'childrenContentfulBlogPostBodyContentTextNode.internal.content'
    | 'childrenContentfulBlogPostBodyContentTextNode.internal.contentDigest'
    | 'childrenContentfulBlogPostBodyContentTextNode.internal.description'
    | 'childrenContentfulBlogPostBodyContentTextNode.internal.fieldOwners'
    | 'childrenContentfulBlogPostBodyContentTextNode.internal.ignoreType'
    | 'childrenContentfulBlogPostBodyContentTextNode.internal.mediaType'
    | 'childrenContentfulBlogPostBodyContentTextNode.internal.owner'
    | 'childrenContentfulBlogPostBodyContentTextNode.internal.type'
    | 'childrenContentfulBlogPostBodyContentTextNode.bodyContent'
    | 'childrenContentfulBlogPostBodyContentTextNode.sys.type'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.frontmatter.title'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.excerpt'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.rawMarkdownBody'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.html'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.htmlAst'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.excerptAst'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.headings'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.headings.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.headings.value'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.headings.depth'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.timeToRead'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.tableOfContents'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.wordCount.paragraphs'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.wordCount.sentences'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.wordCount.words'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.parent.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.parent.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.children.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.children.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.content'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.contentDigest'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.description'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.fieldOwners'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.ignoreType'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.mediaType'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.owner'
    | 'childrenContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.type'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.frontmatter.title'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.excerpt'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.rawMarkdownBody'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.html'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.htmlAst'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.excerptAst'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.headings'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.headings.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.headings.value'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.headings.depth'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.timeToRead'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.tableOfContents'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.wordCount.paragraphs'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.wordCount.sentences'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.wordCount.words'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.parent.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.parent.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.children.id'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.children.children'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.content'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.contentDigest'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.description'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.fieldOwners'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.ignoreType'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.mediaType'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.owner'
    | 'childrenContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.type'
    | 'childContentfulBlogPostBodyContentTextNode.id'
    | 'childContentfulBlogPostBodyContentTextNode.parent.id'
    | 'childContentfulBlogPostBodyContentTextNode.parent.parent.id'
    | 'childContentfulBlogPostBodyContentTextNode.parent.parent.children'
    | 'childContentfulBlogPostBodyContentTextNode.parent.children'
    | 'childContentfulBlogPostBodyContentTextNode.parent.children.id'
    | 'childContentfulBlogPostBodyContentTextNode.parent.children.children'
    | 'childContentfulBlogPostBodyContentTextNode.parent.internal.content'
    | 'childContentfulBlogPostBodyContentTextNode.parent.internal.contentDigest'
    | 'childContentfulBlogPostBodyContentTextNode.parent.internal.description'
    | 'childContentfulBlogPostBodyContentTextNode.parent.internal.fieldOwners'
    | 'childContentfulBlogPostBodyContentTextNode.parent.internal.ignoreType'
    | 'childContentfulBlogPostBodyContentTextNode.parent.internal.mediaType'
    | 'childContentfulBlogPostBodyContentTextNode.parent.internal.owner'
    | 'childContentfulBlogPostBodyContentTextNode.parent.internal.type'
    | 'childContentfulBlogPostBodyContentTextNode.children'
    | 'childContentfulBlogPostBodyContentTextNode.children.id'
    | 'childContentfulBlogPostBodyContentTextNode.children.parent.id'
    | 'childContentfulBlogPostBodyContentTextNode.children.parent.children'
    | 'childContentfulBlogPostBodyContentTextNode.children.children'
    | 'childContentfulBlogPostBodyContentTextNode.children.children.id'
    | 'childContentfulBlogPostBodyContentTextNode.children.children.children'
    | 'childContentfulBlogPostBodyContentTextNode.children.internal.content'
    | 'childContentfulBlogPostBodyContentTextNode.children.internal.contentDigest'
    | 'childContentfulBlogPostBodyContentTextNode.children.internal.description'
    | 'childContentfulBlogPostBodyContentTextNode.children.internal.fieldOwners'
    | 'childContentfulBlogPostBodyContentTextNode.children.internal.ignoreType'
    | 'childContentfulBlogPostBodyContentTextNode.children.internal.mediaType'
    | 'childContentfulBlogPostBodyContentTextNode.children.internal.owner'
    | 'childContentfulBlogPostBodyContentTextNode.children.internal.type'
    | 'childContentfulBlogPostBodyContentTextNode.internal.content'
    | 'childContentfulBlogPostBodyContentTextNode.internal.contentDigest'
    | 'childContentfulBlogPostBodyContentTextNode.internal.description'
    | 'childContentfulBlogPostBodyContentTextNode.internal.fieldOwners'
    | 'childContentfulBlogPostBodyContentTextNode.internal.ignoreType'
    | 'childContentfulBlogPostBodyContentTextNode.internal.mediaType'
    | 'childContentfulBlogPostBodyContentTextNode.internal.owner'
    | 'childContentfulBlogPostBodyContentTextNode.internal.type'
    | 'childContentfulBlogPostBodyContentTextNode.bodyContent'
    | 'childContentfulBlogPostBodyContentTextNode.sys.type'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.id'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.frontmatter.title'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.excerpt'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.rawMarkdownBody'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.html'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.htmlAst'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.excerptAst'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.headings'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.headings.id'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.headings.value'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.headings.depth'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.timeToRead'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.tableOfContents'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.wordCount.paragraphs'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.wordCount.sentences'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.wordCount.words'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.parent.id'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.parent.children'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.children'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.children.id'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.children.children'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.content'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.contentDigest'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.description'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.fieldOwners'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.ignoreType'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.mediaType'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.owner'
    | 'childContentfulBlogPostBodyContentTextNode.childrenMarkdownRemark.internal.type'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.id'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.frontmatter.title'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.excerpt'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.rawMarkdownBody'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.html'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.htmlAst'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.excerptAst'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.headings'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.headings.id'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.headings.value'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.headings.depth'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.timeToRead'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.tableOfContents'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.wordCount.paragraphs'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.wordCount.sentences'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.wordCount.words'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.parent.id'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.parent.children'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.children'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.children.id'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.children.children'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.content'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.contentDigest'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.description'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.fieldOwners'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.ignoreType'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.mediaType'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.owner'
    | 'childContentfulBlogPostBodyContentTextNode.childMarkdownRemark.internal.type'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type ContentfulBlogPostGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ContentfulBlogPostEdge>
    readonly nodes: ReadonlyArray<ContentfulBlogPost>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type ContentfulBlogPostFilterInput = {
    readonly contentful_id: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly node_locale: Maybe<StringQueryOperatorInput>
    readonly title: Maybe<StringQueryOperatorInput>
    readonly slug: Maybe<StringQueryOperatorInput>
    readonly publishedDate: Maybe<DateQueryOperatorInput>
    readonly image: Maybe<ContentfulAssetFilterInput>
    readonly bodyContent: Maybe<contentfulBlogPostBodyContentTextNodeFilterInput>
    readonly spaceId: Maybe<StringQueryOperatorInput>
    readonly createdAt: Maybe<DateQueryOperatorInput>
    readonly updatedAt: Maybe<DateQueryOperatorInput>
    readonly sys: Maybe<ContentfulBlogPostSysFilterInput>
    readonly childrenContentfulBlogPostBodyContentTextNode: Maybe<contentfulBlogPostBodyContentTextNodeFilterListInput>
    readonly childContentfulBlogPostBodyContentTextNode: Maybe<contentfulBlogPostBodyContentTextNodeFilterInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type ContentfulBlogPostSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulBlogPostFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type contentfulSkillsSkillsItemJsonNodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
    readonly aboutMe: Maybe<StringQueryOperatorInput>
    readonly skills1: Maybe<StringQueryOperatorInput>
    readonly skills2: Maybe<StringQueryOperatorInput>
    readonly skills3: Maybe<StringQueryOperatorInput>
    readonly sys: Maybe<contentfulSkillsSkillsItemJsonNodeSysFilterInput>
  }

  type contentfulSkillsSkillsItemJsonNodeSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>
  }

  type ContentfulSkillsSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>
    readonly revision: Maybe<IntQueryOperatorInput>
    readonly contentType: Maybe<ContentfulSkillsSysContentTypeFilterInput>
  }

  type ContentfulSkillsSysContentTypeFilterInput = {
    readonly sys: Maybe<ContentfulSkillsSysContentTypeSysFilterInput>
  }

  type ContentfulSkillsSysContentTypeSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>
    readonly linkType: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
  }

  type contentfulSkillsSkillsItemJsonNodeFilterListInput = {
    readonly elemMatch: Maybe<contentfulSkillsSkillsItemJsonNodeFilterInput>
  }

  type ContentfulSkillsConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ContentfulSkillsEdge>
    readonly nodes: ReadonlyArray<ContentfulSkills>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<ContentfulSkillsGroupConnection>
  }

  type ContentfulSkillsConnection_distinctArgs = {
    field: ContentfulSkillsFieldsEnum
  }

  type ContentfulSkillsConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: ContentfulSkillsFieldsEnum
  }

  type ContentfulSkillsEdge = {
    readonly next: Maybe<ContentfulSkills>
    readonly node: ContentfulSkills
    readonly previous: Maybe<ContentfulSkills>
  }

  type ContentfulSkillsFieldsEnum =
    | 'contentful_id'
    | 'id'
    | 'node_locale'
    | 'skillsItem.id'
    | 'skillsItem.parent.id'
    | 'skillsItem.parent.parent.id'
    | 'skillsItem.parent.parent.children'
    | 'skillsItem.parent.children'
    | 'skillsItem.parent.children.id'
    | 'skillsItem.parent.children.children'
    | 'skillsItem.parent.internal.content'
    | 'skillsItem.parent.internal.contentDigest'
    | 'skillsItem.parent.internal.description'
    | 'skillsItem.parent.internal.fieldOwners'
    | 'skillsItem.parent.internal.ignoreType'
    | 'skillsItem.parent.internal.mediaType'
    | 'skillsItem.parent.internal.owner'
    | 'skillsItem.parent.internal.type'
    | 'skillsItem.children'
    | 'skillsItem.children.id'
    | 'skillsItem.children.parent.id'
    | 'skillsItem.children.parent.children'
    | 'skillsItem.children.children'
    | 'skillsItem.children.children.id'
    | 'skillsItem.children.children.children'
    | 'skillsItem.children.internal.content'
    | 'skillsItem.children.internal.contentDigest'
    | 'skillsItem.children.internal.description'
    | 'skillsItem.children.internal.fieldOwners'
    | 'skillsItem.children.internal.ignoreType'
    | 'skillsItem.children.internal.mediaType'
    | 'skillsItem.children.internal.owner'
    | 'skillsItem.children.internal.type'
    | 'skillsItem.internal.content'
    | 'skillsItem.internal.contentDigest'
    | 'skillsItem.internal.description'
    | 'skillsItem.internal.fieldOwners'
    | 'skillsItem.internal.ignoreType'
    | 'skillsItem.internal.mediaType'
    | 'skillsItem.internal.owner'
    | 'skillsItem.internal.type'
    | 'skillsItem.aboutMe'
    | 'skillsItem.skills1'
    | 'skillsItem.skills2'
    | 'skillsItem.skills3'
    | 'skillsItem.sys.type'
    | 'spaceId'
    | 'createdAt'
    | 'updatedAt'
    | 'sys.type'
    | 'sys.revision'
    | 'sys.contentType.sys.type'
    | 'sys.contentType.sys.linkType'
    | 'sys.contentType.sys.id'
    | 'childrenContentfulSkillsSkillsItemJsonNode'
    | 'childrenContentfulSkillsSkillsItemJsonNode.id'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.id'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.parent.id'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.parent.children'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.children'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.children.id'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.children.children'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.internal.content'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.internal.contentDigest'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.internal.description'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.internal.fieldOwners'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.internal.ignoreType'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.internal.mediaType'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.internal.owner'
    | 'childrenContentfulSkillsSkillsItemJsonNode.parent.internal.type'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.id'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.parent.id'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.parent.children'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.children'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.children.id'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.children.children'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.internal.content'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.internal.contentDigest'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.internal.description'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.internal.fieldOwners'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.internal.ignoreType'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.internal.mediaType'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.internal.owner'
    | 'childrenContentfulSkillsSkillsItemJsonNode.children.internal.type'
    | 'childrenContentfulSkillsSkillsItemJsonNode.internal.content'
    | 'childrenContentfulSkillsSkillsItemJsonNode.internal.contentDigest'
    | 'childrenContentfulSkillsSkillsItemJsonNode.internal.description'
    | 'childrenContentfulSkillsSkillsItemJsonNode.internal.fieldOwners'
    | 'childrenContentfulSkillsSkillsItemJsonNode.internal.ignoreType'
    | 'childrenContentfulSkillsSkillsItemJsonNode.internal.mediaType'
    | 'childrenContentfulSkillsSkillsItemJsonNode.internal.owner'
    | 'childrenContentfulSkillsSkillsItemJsonNode.internal.type'
    | 'childrenContentfulSkillsSkillsItemJsonNode.aboutMe'
    | 'childrenContentfulSkillsSkillsItemJsonNode.skills1'
    | 'childrenContentfulSkillsSkillsItemJsonNode.skills2'
    | 'childrenContentfulSkillsSkillsItemJsonNode.skills3'
    | 'childrenContentfulSkillsSkillsItemJsonNode.sys.type'
    | 'childContentfulSkillsSkillsItemJsonNode.id'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.id'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.parent.id'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.parent.children'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.children'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.children.id'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.children.children'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.internal.content'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.internal.contentDigest'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.internal.description'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.internal.fieldOwners'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.internal.ignoreType'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.internal.mediaType'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.internal.owner'
    | 'childContentfulSkillsSkillsItemJsonNode.parent.internal.type'
    | 'childContentfulSkillsSkillsItemJsonNode.children'
    | 'childContentfulSkillsSkillsItemJsonNode.children.id'
    | 'childContentfulSkillsSkillsItemJsonNode.children.parent.id'
    | 'childContentfulSkillsSkillsItemJsonNode.children.parent.children'
    | 'childContentfulSkillsSkillsItemJsonNode.children.children'
    | 'childContentfulSkillsSkillsItemJsonNode.children.children.id'
    | 'childContentfulSkillsSkillsItemJsonNode.children.children.children'
    | 'childContentfulSkillsSkillsItemJsonNode.children.internal.content'
    | 'childContentfulSkillsSkillsItemJsonNode.children.internal.contentDigest'
    | 'childContentfulSkillsSkillsItemJsonNode.children.internal.description'
    | 'childContentfulSkillsSkillsItemJsonNode.children.internal.fieldOwners'
    | 'childContentfulSkillsSkillsItemJsonNode.children.internal.ignoreType'
    | 'childContentfulSkillsSkillsItemJsonNode.children.internal.mediaType'
    | 'childContentfulSkillsSkillsItemJsonNode.children.internal.owner'
    | 'childContentfulSkillsSkillsItemJsonNode.children.internal.type'
    | 'childContentfulSkillsSkillsItemJsonNode.internal.content'
    | 'childContentfulSkillsSkillsItemJsonNode.internal.contentDigest'
    | 'childContentfulSkillsSkillsItemJsonNode.internal.description'
    | 'childContentfulSkillsSkillsItemJsonNode.internal.fieldOwners'
    | 'childContentfulSkillsSkillsItemJsonNode.internal.ignoreType'
    | 'childContentfulSkillsSkillsItemJsonNode.internal.mediaType'
    | 'childContentfulSkillsSkillsItemJsonNode.internal.owner'
    | 'childContentfulSkillsSkillsItemJsonNode.internal.type'
    | 'childContentfulSkillsSkillsItemJsonNode.aboutMe'
    | 'childContentfulSkillsSkillsItemJsonNode.skills1'
    | 'childContentfulSkillsSkillsItemJsonNode.skills2'
    | 'childContentfulSkillsSkillsItemJsonNode.skills3'
    | 'childContentfulSkillsSkillsItemJsonNode.sys.type'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'

  type ContentfulSkillsGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ContentfulSkillsEdge>
    readonly nodes: ReadonlyArray<ContentfulSkills>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type ContentfulSkillsFilterInput = {
    readonly contentful_id: Maybe<StringQueryOperatorInput>
    readonly id: Maybe<StringQueryOperatorInput>
    readonly node_locale: Maybe<StringQueryOperatorInput>
    readonly skillsItem: Maybe<contentfulSkillsSkillsItemJsonNodeFilterInput>
    readonly spaceId: Maybe<StringQueryOperatorInput>
    readonly createdAt: Maybe<DateQueryOperatorInput>
    readonly updatedAt: Maybe<DateQueryOperatorInput>
    readonly sys: Maybe<ContentfulSkillsSysFilterInput>
    readonly childrenContentfulSkillsSkillsItemJsonNode: Maybe<contentfulSkillsSkillsItemJsonNodeFilterListInput>
    readonly childContentfulSkillsSkillsItemJsonNode: Maybe<contentfulSkillsSkillsItemJsonNodeFilterInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
  }

  type ContentfulSkillsSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulSkillsFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type contentfulSkillsSkillsItemJsonNodeConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<contentfulSkillsSkillsItemJsonNodeEdge>
    readonly nodes: ReadonlyArray<contentfulSkillsSkillsItemJsonNode>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<contentfulSkillsSkillsItemJsonNodeGroupConnection>
  }

  type contentfulSkillsSkillsItemJsonNodeConnection_distinctArgs = {
    field: contentfulSkillsSkillsItemJsonNodeFieldsEnum
  }

  type contentfulSkillsSkillsItemJsonNodeConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: contentfulSkillsSkillsItemJsonNodeFieldsEnum
  }

  type contentfulSkillsSkillsItemJsonNodeEdge = {
    readonly next: Maybe<contentfulSkillsSkillsItemJsonNode>
    readonly node: contentfulSkillsSkillsItemJsonNode
    readonly previous: Maybe<contentfulSkillsSkillsItemJsonNode>
  }

  type contentfulSkillsSkillsItemJsonNodeFieldsEnum =
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'aboutMe'
    | 'skills1'
    | 'skills2'
    | 'skills3'
    | 'sys.type'

  type contentfulSkillsSkillsItemJsonNodeGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<contentfulSkillsSkillsItemJsonNodeEdge>
    readonly nodes: ReadonlyArray<contentfulSkillsSkillsItemJsonNode>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type contentfulSkillsSkillsItemJsonNodeSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<contentfulSkillsSkillsItemJsonNodeFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type contentfulBlogPostBodyContentTextNodeConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<contentfulBlogPostBodyContentTextNodeEdge>
    readonly nodes: ReadonlyArray<contentfulBlogPostBodyContentTextNode>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<contentfulBlogPostBodyContentTextNodeGroupConnection>
  }

  type contentfulBlogPostBodyContentTextNodeConnection_distinctArgs = {
    field: contentfulBlogPostBodyContentTextNodeFieldsEnum
  }

  type contentfulBlogPostBodyContentTextNodeConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: contentfulBlogPostBodyContentTextNodeFieldsEnum
  }

  type contentfulBlogPostBodyContentTextNodeEdge = {
    readonly next: Maybe<contentfulBlogPostBodyContentTextNode>
    readonly node: contentfulBlogPostBodyContentTextNode
    readonly previous: Maybe<contentfulBlogPostBodyContentTextNode>
  }

  type contentfulBlogPostBodyContentTextNodeFieldsEnum =
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'bodyContent'
    | 'sys.type'
    | 'childrenMarkdownRemark'
    | 'childrenMarkdownRemark.id'
    | 'childrenMarkdownRemark.frontmatter.title'
    | 'childrenMarkdownRemark.excerpt'
    | 'childrenMarkdownRemark.rawMarkdownBody'
    | 'childrenMarkdownRemark.html'
    | 'childrenMarkdownRemark.htmlAst'
    | 'childrenMarkdownRemark.excerptAst'
    | 'childrenMarkdownRemark.headings'
    | 'childrenMarkdownRemark.headings.id'
    | 'childrenMarkdownRemark.headings.value'
    | 'childrenMarkdownRemark.headings.depth'
    | 'childrenMarkdownRemark.timeToRead'
    | 'childrenMarkdownRemark.tableOfContents'
    | 'childrenMarkdownRemark.wordCount.paragraphs'
    | 'childrenMarkdownRemark.wordCount.sentences'
    | 'childrenMarkdownRemark.wordCount.words'
    | 'childrenMarkdownRemark.parent.id'
    | 'childrenMarkdownRemark.parent.parent.id'
    | 'childrenMarkdownRemark.parent.parent.children'
    | 'childrenMarkdownRemark.parent.children'
    | 'childrenMarkdownRemark.parent.children.id'
    | 'childrenMarkdownRemark.parent.children.children'
    | 'childrenMarkdownRemark.parent.internal.content'
    | 'childrenMarkdownRemark.parent.internal.contentDigest'
    | 'childrenMarkdownRemark.parent.internal.description'
    | 'childrenMarkdownRemark.parent.internal.fieldOwners'
    | 'childrenMarkdownRemark.parent.internal.ignoreType'
    | 'childrenMarkdownRemark.parent.internal.mediaType'
    | 'childrenMarkdownRemark.parent.internal.owner'
    | 'childrenMarkdownRemark.parent.internal.type'
    | 'childrenMarkdownRemark.children'
    | 'childrenMarkdownRemark.children.id'
    | 'childrenMarkdownRemark.children.parent.id'
    | 'childrenMarkdownRemark.children.parent.children'
    | 'childrenMarkdownRemark.children.children'
    | 'childrenMarkdownRemark.children.children.id'
    | 'childrenMarkdownRemark.children.children.children'
    | 'childrenMarkdownRemark.children.internal.content'
    | 'childrenMarkdownRemark.children.internal.contentDigest'
    | 'childrenMarkdownRemark.children.internal.description'
    | 'childrenMarkdownRemark.children.internal.fieldOwners'
    | 'childrenMarkdownRemark.children.internal.ignoreType'
    | 'childrenMarkdownRemark.children.internal.mediaType'
    | 'childrenMarkdownRemark.children.internal.owner'
    | 'childrenMarkdownRemark.children.internal.type'
    | 'childrenMarkdownRemark.internal.content'
    | 'childrenMarkdownRemark.internal.contentDigest'
    | 'childrenMarkdownRemark.internal.description'
    | 'childrenMarkdownRemark.internal.fieldOwners'
    | 'childrenMarkdownRemark.internal.ignoreType'
    | 'childrenMarkdownRemark.internal.mediaType'
    | 'childrenMarkdownRemark.internal.owner'
    | 'childrenMarkdownRemark.internal.type'
    | 'childMarkdownRemark.id'
    | 'childMarkdownRemark.frontmatter.title'
    | 'childMarkdownRemark.excerpt'
    | 'childMarkdownRemark.rawMarkdownBody'
    | 'childMarkdownRemark.html'
    | 'childMarkdownRemark.htmlAst'
    | 'childMarkdownRemark.excerptAst'
    | 'childMarkdownRemark.headings'
    | 'childMarkdownRemark.headings.id'
    | 'childMarkdownRemark.headings.value'
    | 'childMarkdownRemark.headings.depth'
    | 'childMarkdownRemark.timeToRead'
    | 'childMarkdownRemark.tableOfContents'
    | 'childMarkdownRemark.wordCount.paragraphs'
    | 'childMarkdownRemark.wordCount.sentences'
    | 'childMarkdownRemark.wordCount.words'
    | 'childMarkdownRemark.parent.id'
    | 'childMarkdownRemark.parent.parent.id'
    | 'childMarkdownRemark.parent.parent.children'
    | 'childMarkdownRemark.parent.children'
    | 'childMarkdownRemark.parent.children.id'
    | 'childMarkdownRemark.parent.children.children'
    | 'childMarkdownRemark.parent.internal.content'
    | 'childMarkdownRemark.parent.internal.contentDigest'
    | 'childMarkdownRemark.parent.internal.description'
    | 'childMarkdownRemark.parent.internal.fieldOwners'
    | 'childMarkdownRemark.parent.internal.ignoreType'
    | 'childMarkdownRemark.parent.internal.mediaType'
    | 'childMarkdownRemark.parent.internal.owner'
    | 'childMarkdownRemark.parent.internal.type'
    | 'childMarkdownRemark.children'
    | 'childMarkdownRemark.children.id'
    | 'childMarkdownRemark.children.parent.id'
    | 'childMarkdownRemark.children.parent.children'
    | 'childMarkdownRemark.children.children'
    | 'childMarkdownRemark.children.children.id'
    | 'childMarkdownRemark.children.children.children'
    | 'childMarkdownRemark.children.internal.content'
    | 'childMarkdownRemark.children.internal.contentDigest'
    | 'childMarkdownRemark.children.internal.description'
    | 'childMarkdownRemark.children.internal.fieldOwners'
    | 'childMarkdownRemark.children.internal.ignoreType'
    | 'childMarkdownRemark.children.internal.mediaType'
    | 'childMarkdownRemark.children.internal.owner'
    | 'childMarkdownRemark.children.internal.type'
    | 'childMarkdownRemark.internal.content'
    | 'childMarkdownRemark.internal.contentDigest'
    | 'childMarkdownRemark.internal.description'
    | 'childMarkdownRemark.internal.fieldOwners'
    | 'childMarkdownRemark.internal.ignoreType'
    | 'childMarkdownRemark.internal.mediaType'
    | 'childMarkdownRemark.internal.owner'
    | 'childMarkdownRemark.internal.type'

  type contentfulBlogPostBodyContentTextNodeGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<contentfulBlogPostBodyContentTextNodeEdge>
    readonly nodes: ReadonlyArray<contentfulBlogPostBodyContentTextNode>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type contentfulBlogPostBodyContentTextNodeSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<contentfulBlogPostBodyContentTextNodeFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type ContentfulContentTypeSysFilterInput = {
    readonly type: Maybe<StringQueryOperatorInput>
  }

  type ContentfulContentTypeConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ContentfulContentTypeEdge>
    readonly nodes: ReadonlyArray<ContentfulContentType>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>
  }

  type ContentfulContentTypeConnection_distinctArgs = {
    field: ContentfulContentTypeFieldsEnum
  }

  type ContentfulContentTypeConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: ContentfulContentTypeFieldsEnum
  }

  type ContentfulContentTypeEdge = {
    readonly next: Maybe<ContentfulContentType>
    readonly node: ContentfulContentType
    readonly previous: Maybe<ContentfulContentType>
  }

  type ContentfulContentTypeFieldsEnum =
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'name'
    | 'displayField'
    | 'description'
    | 'sys.type'

  type ContentfulContentTypeGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<ContentfulContentTypeEdge>
    readonly nodes: ReadonlyArray<ContentfulContentType>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type ContentfulContentTypeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
    readonly name: Maybe<StringQueryOperatorInput>
    readonly displayField: Maybe<StringQueryOperatorInput>
    readonly description: Maybe<StringQueryOperatorInput>
    readonly sys: Maybe<ContentfulContentTypeSysFilterInput>
  }

  type ContentfulContentTypeSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type SiteBuildMetadataConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>
    readonly nodes: ReadonlyArray<SiteBuildMetadata>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>
  }

  type SiteBuildMetadataConnection_distinctArgs = {
    field: SiteBuildMetadataFieldsEnum
  }

  type SiteBuildMetadataConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: SiteBuildMetadataFieldsEnum
  }

  type SiteBuildMetadataEdge = {
    readonly next: Maybe<SiteBuildMetadata>
    readonly node: SiteBuildMetadata
    readonly previous: Maybe<SiteBuildMetadata>
  }

  type SiteBuildMetadataFieldsEnum =
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'buildTime'

  type SiteBuildMetadataGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>
    readonly nodes: ReadonlyArray<SiteBuildMetadata>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type SiteBuildMetadataFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>
    readonly parent: Maybe<NodeFilterInput>
    readonly children: Maybe<NodeFilterListInput>
    readonly internal: Maybe<InternalFilterInput>
    readonly buildTime: Maybe<DateQueryOperatorInput>
  }

  type SiteBuildMetadataSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type SitePluginConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SitePluginEdge>
    readonly nodes: ReadonlyArray<SitePlugin>
    readonly pageInfo: PageInfo
    readonly distinct: ReadonlyArray<Scalars['String']>
    readonly group: ReadonlyArray<SitePluginGroupConnection>
  }

  type SitePluginConnection_distinctArgs = {
    field: SitePluginFieldsEnum
  }

  type SitePluginConnection_groupArgs = {
    skip: Maybe<Scalars['Int']>
    limit: Maybe<Scalars['Int']>
    field: SitePluginFieldsEnum
  }

  type SitePluginEdge = {
    readonly next: Maybe<SitePlugin>
    readonly node: SitePlugin
    readonly previous: Maybe<SitePlugin>
  }

  type SitePluginFieldsEnum =
    | 'id'
    | 'parent.id'
    | 'parent.parent.id'
    | 'parent.parent.parent.id'
    | 'parent.parent.parent.children'
    | 'parent.parent.children'
    | 'parent.parent.children.id'
    | 'parent.parent.children.children'
    | 'parent.parent.internal.content'
    | 'parent.parent.internal.contentDigest'
    | 'parent.parent.internal.description'
    | 'parent.parent.internal.fieldOwners'
    | 'parent.parent.internal.ignoreType'
    | 'parent.parent.internal.mediaType'
    | 'parent.parent.internal.owner'
    | 'parent.parent.internal.type'
    | 'parent.children'
    | 'parent.children.id'
    | 'parent.children.parent.id'
    | 'parent.children.parent.children'
    | 'parent.children.children'
    | 'parent.children.children.id'
    | 'parent.children.children.children'
    | 'parent.children.internal.content'
    | 'parent.children.internal.contentDigest'
    | 'parent.children.internal.description'
    | 'parent.children.internal.fieldOwners'
    | 'parent.children.internal.ignoreType'
    | 'parent.children.internal.mediaType'
    | 'parent.children.internal.owner'
    | 'parent.children.internal.type'
    | 'parent.internal.content'
    | 'parent.internal.contentDigest'
    | 'parent.internal.description'
    | 'parent.internal.fieldOwners'
    | 'parent.internal.ignoreType'
    | 'parent.internal.mediaType'
    | 'parent.internal.owner'
    | 'parent.internal.type'
    | 'children'
    | 'children.id'
    | 'children.parent.id'
    | 'children.parent.parent.id'
    | 'children.parent.parent.children'
    | 'children.parent.children'
    | 'children.parent.children.id'
    | 'children.parent.children.children'
    | 'children.parent.internal.content'
    | 'children.parent.internal.contentDigest'
    | 'children.parent.internal.description'
    | 'children.parent.internal.fieldOwners'
    | 'children.parent.internal.ignoreType'
    | 'children.parent.internal.mediaType'
    | 'children.parent.internal.owner'
    | 'children.parent.internal.type'
    | 'children.children'
    | 'children.children.id'
    | 'children.children.parent.id'
    | 'children.children.parent.children'
    | 'children.children.children'
    | 'children.children.children.id'
    | 'children.children.children.children'
    | 'children.children.internal.content'
    | 'children.children.internal.contentDigest'
    | 'children.children.internal.description'
    | 'children.children.internal.fieldOwners'
    | 'children.children.internal.ignoreType'
    | 'children.children.internal.mediaType'
    | 'children.children.internal.owner'
    | 'children.children.internal.type'
    | 'children.internal.content'
    | 'children.internal.contentDigest'
    | 'children.internal.description'
    | 'children.internal.fieldOwners'
    | 'children.internal.ignoreType'
    | 'children.internal.mediaType'
    | 'children.internal.owner'
    | 'children.internal.type'
    | 'internal.content'
    | 'internal.contentDigest'
    | 'internal.description'
    | 'internal.fieldOwners'
    | 'internal.ignoreType'
    | 'internal.mediaType'
    | 'internal.owner'
    | 'internal.type'
    | 'resolve'
    | 'name'
    | 'version'
    | 'pluginOptions.plugins'
    | 'pluginOptions.plugins.resolve'
    | 'pluginOptions.plugins.id'
    | 'pluginOptions.plugins.name'
    | 'pluginOptions.plugins.version'
    | 'pluginOptions.plugins.pluginOptions.plugins'
    | 'pluginOptions.plugins.pluginOptions.maxWidth'
    | 'pluginOptions.plugins.pluginOptions.offsetY'
    | 'pluginOptions.plugins.pluginOptions.className'
    | 'pluginOptions.plugins.pluginOptions.classPrefix'
    | 'pluginOptions.plugins.pluginOptions.showLineNumbers'
    | 'pluginOptions.plugins.pluginOptions.numberLines'
    | 'pluginOptions.plugins.pluginOptions.noInlineHighlight'
    | 'pluginOptions.plugins.nodeAPIs'
    | 'pluginOptions.plugins.browserAPIs'
    | 'pluginOptions.plugins.ssrAPIs'
    | 'pluginOptions.plugins.pluginFilepath'
    | 'pluginOptions.trackingId'
    | 'pluginOptions.anonymize'
    | 'pluginOptions.head'
    | 'pluginOptions.respectDNT'
    | 'pluginOptions.pageTransitionDelay'
    | 'pluginOptions.displayName'
    | 'pluginOptions.fileName'
    | 'pluginOptions.minify'
    | 'pluginOptions.namespace'
    | 'pluginOptions.transpileTemplateLiterals'
    | 'pluginOptions.pure'
    | 'pluginOptions.base64Width'
    | 'pluginOptions.stripMetadata'
    | 'pluginOptions.defaultQuality'
    | 'pluginOptions.failOnError'
    | 'pluginOptions.maxWidth'
    | 'pluginOptions.offsetY'
    | 'pluginOptions.className'
    | 'pluginOptions.classPrefix'
    | 'pluginOptions.aliases.sh'
    | 'pluginOptions.aliases.es6'
    | 'pluginOptions.aliases.env'
    | 'pluginOptions.aliases.mdx'
    | 'pluginOptions.showLineNumbers'
    | 'pluginOptions.numberLines'
    | 'pluginOptions.noInlineHighlight'
    | 'pluginOptions.prompt.user'
    | 'pluginOptions.prompt.host'
    | 'pluginOptions.prompt.global'
    | 'pluginOptions.light.breakpoint.mobile'
    | 'pluginOptions.light.palette.background'
    | 'pluginOptions.light.palette.blue'
    | 'pluginOptions.light.palette.red'
    | 'pluginOptions.light.palette.grey'
    | 'pluginOptions.light.palette.black'
    | 'pluginOptions.light.palette.white'
    | 'pluginOptions.light.palette.orange'
    | 'pluginOptions.light.palette.darkBlack'
    | 'pluginOptions.light.textColor'
    | 'pluginOptions.light.mainBg'
    | 'pluginOptions.light.secondary'
    | 'pluginOptions.light.primary'
    | 'pluginOptions.light.mainBgDark'
    | 'pluginOptions.light.borderColor'
    | 'pluginOptions.dark.breakpoint.mobile'
    | 'pluginOptions.dark.palette.background'
    | 'pluginOptions.dark.palette.blue'
    | 'pluginOptions.dark.palette.red'
    | 'pluginOptions.dark.palette.grey'
    | 'pluginOptions.dark.palette.black'
    | 'pluginOptions.dark.palette.white'
    | 'pluginOptions.dark.palette.orange'
    | 'pluginOptions.dark.palette.darkBlack'
    | 'pluginOptions.dark.textColor'
    | 'pluginOptions.dark.mainBg'
    | 'pluginOptions.dark.secondary'
    | 'pluginOptions.dark.primary'
    | 'pluginOptions.dark.mainBgDark'
    | 'pluginOptions.dark.borderColor'
    | 'pluginOptions.name'
    | 'pluginOptions.short_name'
    | 'pluginOptions.start_url'
    | 'pluginOptions.background_color'
    | 'pluginOptions.theme_color'
    | 'pluginOptions.display'
    | 'pluginOptions.icon'
    | 'pluginOptions.legacy'
    | 'pluginOptions.theme_color_in_head'
    | 'pluginOptions.cache_busting_mode'
    | 'pluginOptions.crossOrigin'
    | 'pluginOptions.include_favicon'
    | 'pluginOptions.cacheDigest'
    | 'pluginOptions.component'
    | 'pluginOptions.isTSX'
    | 'pluginOptions.jsxPragma'
    | 'pluginOptions.allExtensions'
    | 'pluginOptions.path'
    | 'pluginOptions.spaceId'
    | 'pluginOptions.accessToken'
    | 'pluginOptions.downloadLocal'
    | 'pluginOptions.host'
    | 'pluginOptions.environment'
    | 'pluginOptions.forceFullSync'
    | 'pluginOptions.pageLimit'
    | 'pluginOptions.assetDownloadWorkers'
    | 'pluginOptions.useNameForId'
    | 'pluginOptions.query'
    | 'pluginOptions.output'
    | 'pluginOptions.createLinkInHead'
    | 'pluginOptions.policy'
    | 'pluginOptions.policy.userAgent'
    | 'pluginOptions.policy.allow'
    | 'pluginOptions.outputPath'
    | 'pluginOptions.pathCheck'
    | 'nodeAPIs'
    | 'browserAPIs'
    | 'ssrAPIs'
    | 'pluginFilepath'
    | 'packageJson.name'
    | 'packageJson.description'
    | 'packageJson.version'
    | 'packageJson.main'
    | 'packageJson.license'
    | 'packageJson.dependencies'
    | 'packageJson.dependencies.name'
    | 'packageJson.dependencies.version'
    | 'packageJson.devDependencies'
    | 'packageJson.devDependencies.name'
    | 'packageJson.devDependencies.version'
    | 'packageJson.peerDependencies'
    | 'packageJson.peerDependencies.name'
    | 'packageJson.peerDependencies.version'
    | 'packageJson.keywords'

  type SitePluginGroupConnection = {
    readonly totalCount: Scalars['Int']
    readonly edges: ReadonlyArray<SitePluginEdge>
    readonly nodes: ReadonlyArray<SitePlugin>
    readonly pageInfo: PageInfo
    readonly field: Scalars['String']
    readonly fieldValue: Maybe<Scalars['String']>
  }

  type SitePluginSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>
  }

  type getPostPerPageQueryVariables = Exact<{
    slug: Scalars['String']
  }>

  type getPostPerPageQuery = {
    readonly contentfulBlogPost: Maybe<
      Pick<ContentfulBlogPost, 'title' | 'publishedDate' | 'slug'> & {
        readonly image: Maybe<
          Pick<ContentfulAsset, 'title'> & {
            readonly localFile: Maybe<{
              readonly childImageSharp: Maybe<{readonly fluid: Maybe<Pick<ImageSharpFluid, 'src'>>}>
            }>
            readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment>
          }
        >
        readonly bodyContent: Maybe<
          Pick<contentfulBlogPostBodyContentTextNode, 'bodyContent'> & {
            readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'excerpt' | 'html'>>
          }
        >
      }
    >
  }

  type PagesQueryQueryVariables = Exact<{[key: string]: never}>

  type PagesQueryQuery = {
    readonly allSitePage: {readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>>}
  }

  type Unnamed_1_QueryVariables = Exact<{[key: string]: never}>

  type Unnamed_1_Query = {
    readonly contentfulAsset: Maybe<
      Pick<ContentfulAsset, 'title'> & {
        readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment>
      }
    >
    readonly contentfulSkills: Maybe<{
      readonly skillsItem: Maybe<
        Pick<contentfulSkillsSkillsItemJsonNode, 'skills1' | 'skills2' | 'skills3' | 'aboutMe'>
      >
    }>
    readonly site: Maybe<{readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'author'>>}>
  }

  type Unnamed_2_QueryVariables = Exact<{[key: string]: never}>

  type Unnamed_2_Query = {
    readonly site: Maybe<{readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'author'>>}>
  }

  type getAllBlogsQueryVariables = Exact<{[key: string]: never}>

  type getAllBlogsQuery = {
    readonly allContentfulBlogPost: {
      readonly edges: ReadonlyArray<{
        readonly node: Pick<
          ContentfulBlogPost,
          'title' | 'slug' | 'publishedDate' | 'contentful_id'
        > & {
          readonly image: Maybe<
            Pick<ContentfulAsset, 'title'> & {
              readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment>
            }
          >
        }
      }>
    }
  }

  type Unnamed_3_QueryVariables = Exact<{[key: string]: never}>

  type Unnamed_3_Query = {
    readonly site: Maybe<{readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>>}>
  }

  type Unnamed_4_QueryVariables = Exact<{[key: string]: never}>

  type Unnamed_4_Query = {
    readonly contentfulAsset: Maybe<
      Pick<ContentfulAsset, 'title'> & {
        readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment>
      }
    >
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'author' | 'description'>>
    }>
  }

  type Unnamed_5_QueryVariables = Exact<{[key: string]: never}>

  type Unnamed_5_Query = {
    readonly site: Maybe<{
      readonly siteMetadata: Maybe<
        Pick<SiteSiteMetadata, 'title' | 'author' | 'description' | 'siteUrl' | 'defaultImage'>
      >
    }>
  }

  type GatsbyContentfulFixedFragment = Pick<
    ContentfulFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyContentfulFixed_tracedSVGFragment = Pick<
    ContentfulFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyContentfulFixed_noBase64Fragment = Pick<
    ContentfulFixed,
    'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyContentfulFixed_withWebpFragment = Pick<
    ContentfulFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >

  type GatsbyContentfulFixed_withWebp_noBase64Fragment = Pick<
    ContentfulFixed,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >

  type GatsbyContentfulFluidFragment = Pick<
    ContentfulFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyContentfulFluid_tracedSVGFragment = Pick<
    ContentfulFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyContentfulFluid_noBase64Fragment = Pick<
    ContentfulFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyContentfulFluid_withWebpFragment = Pick<
    ContentfulFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >

  type GatsbyContentfulFluid_withWebp_noBase64Fragment = Pick<
    ContentfulFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >

  type GatsbyImageSharpFixedFragment = Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyImageSharpFixed_tracedSVGFragment = Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyImageSharpFixed_withWebpFragment = Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >

  type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >

  type GatsbyImageSharpFixed_noBase64Fragment = Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet'
  >

  type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
  >

  type GatsbyImageSharpFluidFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
    maxHeight: ImageSharpFluid['presentationHeight']
    maxWidth: ImageSharpFluid['presentationWidth']
  }

  type GatsbyImageSharpFluid_tracedSVGFragment = Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyImageSharpFluid_withWebpFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >

  type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >

  type GatsbyImageSharpFluid_noBase64Fragment = Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'sizes'
  >

  type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
  >
}
