const BackButton = ({onClick}) => {
    return (
        <svg onClick={onClick} style={{cursor: 'pointer'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.3283 18.671L14.3282 18.6709L7.74748 12.1142C7.73257 12.0994 7.72074 12.0817 7.71267 12.0623L7.25277 12.2532L7.71267 12.0623C7.7046 12.0428 7.70044 12.022 7.70044 12.0009C7.70044 11.9799 7.70459 11.959 7.71267 11.9396C7.72072 11.9202 7.73253 11.9025 7.7474 11.8877C7.74743 11.8877 7.74745 11.8876 7.74748 11.8876L14.3239 5.33395C14.3426 5.31683 14.3671 5.30741 14.3925 5.30767C14.4187 5.30793 14.4438 5.31848 14.4623 5.33705C14.4808 5.35562 14.4913 5.38071 14.4915 5.40694C14.4917 5.43231 14.4822 5.45676 14.4651 5.47538L8.27273 11.6462L7.91732 12.0003L8.27272 12.3545L14.4694 18.5295C14.4694 18.5296 14.4695 18.5296 14.4695 18.5297C14.4882 18.5484 14.4987 18.5737 14.4987 18.6002C14.4988 18.6267 14.4883 18.6521 14.4696 18.6709C14.4508 18.6896 14.4255 18.7002 14.399 18.7002C14.3725 18.7002 14.347 18.6897 14.3283 18.671Z" fill="#161616" stroke="#161616" />
    </svg>
    )
}

export default BackButton;