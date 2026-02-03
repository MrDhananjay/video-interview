"use client";
import { useState } from "react";

export function ImageWithFallback({ src, alt, className, ...props }) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div
                className={className}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f3f4f6',
                    color: '#9ca3af',
                    minHeight: '200px'
                }}
                {...props}
            >
                <span>Image not available</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
            {...props}
        />
    );
}
