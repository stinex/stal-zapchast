import styles from './ControlledModal.module.scss'
import stylesf from '../form/Form.module.scss'

const ControlledModal = ({ shouldShow, onRequestClose, children }) => {
    return shouldShow ? (
        <div className={`${styles.modal_backgroud} ${stylesf.modal}`} onClick={onRequestClose}>
            <div className={styles.modal_body} onClick={e => e.stopPropagation()}>
                <div className={styles.close} onClick={onRequestClose}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292924C0.683417 -0.0976006 1.31658 -0.0976006 1.70711 0.292924L7.99999 6.58581L14.2929 0.292923C14.6834 -0.0976008 15.3166 -0.0976002 15.7071 0.292924C16.0976 0.683449 16.0976 1.31661 15.7071 1.70714L9.41421 8.00002L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0977 14.6834 16.0977 14.2929 15.7071L7.99999 9.41424L1.70711 15.7071C1.31658 16.0977 0.683418 16.0977 0.292894 15.7071C-0.0976307 15.3166 -0.0976313 14.6834 0.292893 14.2929L6.58578 8.00002L0.292893 1.70714C-0.0976311 1.31661 -0.0976311 0.683448 0.292893 0.292924Z" fill="#787A80" />
                    </svg>
                </div>
                {children}
            </div>
        </div>
    ) : null
}
export default ControlledModal