export function Button(properties) {
    const { children, variation } = properties

    const backgroundColor = variation === "destructive" ? "red" : "green"

    return (
        <div style={{ padding: "1rem", border: "1px solid black" }}>
            {
                variation === "normal" ?
                    (
                        <button style={{ backgroundColor: "green" }}>
                            {children}
                        </button>
                    ) : variation === "destructive" ?
                        (
                            <button style={{ backgroundColor: "red" }}>
                                {children}
                            </button>
                        ) : (
                            <button>
                                {children}
                            </button>
                        )
            }
        </div>
    )
}
