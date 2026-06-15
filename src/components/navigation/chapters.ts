export interface Chapter {
    slug: string;
    number: number;
    title: string;
    subtitle: string;
    description: string;
    status: "available" | "coming-soon";
}

export const chapters: Chapter[] = [
    {
        slug: "transformations",
        number: 1,
        title: "Linear Transformations",
        subtitle: "How matrices move space",
        description:
            "Every matrix is a function. Drag the entries and watch how 2D space warps, stretches, and shears beneath it.",
        status: "available",
    },
    {
        slug: "eigenvectors",
        number: 2,
        title: "Vectors That Survive",
        subtitle: "The geometric intuition",
        description:
            "Most vectors get knocked off their span by a transformation. A special few don't. We find them without a single formula.",
        status: "available",
    },
    {
        slug: "characteristic-equation",
        number: 3,
        title: "The Characteristic Equation",
        subtitle: "det(A − λI) = 0",
        description:
            "Where the algebra catches up with the geometry. We derive the characteristic polynomial and learn to solve it.",
        status: "available",
    },
    {
        slug: "eigenspaces",
        number: 4,
        title: "Eigenspaces",
        subtitle: "Into the third dimension",
        description:
            "The set of all eigenvectors for a given eigenvalue forms a subspace. We step into R³ to see it.",
        status: "available",
    },
    {
        slug: "complex-eigenvalues",
        number: 5,
        title: "Complex Eigenvalues",
        subtitle: "Rotations and spirals",
        description:
            "When eigenvalues leave the real line, transformations start to rotate. Complex numbers reveal a hidden rotational structure.",
        status: "available",
    },
    {
        slug: "pagerank",
        number: 6,
        title: "PageRank",
        subtitle: "How Google ranks the web",
        description:
            "The internet is a matrix. The most important page is an eigenvector. Watch power iteration converge on a live web graph.",
        status: "available",
    },
    {
        slug: "pca",
        number: 7,
        title: "Principal Component Analysis",
        subtitle: "Finding the axes of variance",
        description:
            "Given a cloud of points, which direction contains the most information? The answer is an eigenvector of the covariance matrix.",
        status: "available",
    },
    {
        slug: "markov-chains",
        number: 8,
        title: "Markov Chains",
        subtitle: "The long-run stationary distribution",
        description:
            "Where does a random walk end up? The steady state of any Markov chain is the eigenvector with eigenvalue 1.",
        status: "available",
    },
];