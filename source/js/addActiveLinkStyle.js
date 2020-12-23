const pageInfo = location.pathname
const style = document.createElement('style')
style.innerHTML = `
    a[href="${pageInfo}"] {
        color: #3273dc;
    }
`
document.head.appendChild(style)
