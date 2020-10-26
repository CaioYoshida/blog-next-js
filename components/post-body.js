import markdownStyles from './markdown-styles.module.css'
import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div
        className={`${markdownStyles.kgCard} ${markdownStyles.markdown}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
