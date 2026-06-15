import { eigs, matrix, Matrix, MathNumericType } from "mathjs";

export interface EigenResult {
    values: number[];
    vectors: number[][];
}

export function computeEigen(a: number, b: number, c: number, d: number): EigenResult {
    const mat = matrix([
        [a, b],
        [c, d],
    ]);

    const result = eigs(mat);

    const values = (result.values as MathNumericType[]).map((v) => Number(v));
    const vectors = (result.eigenvectors as { vector: MathNumericType[] }[]).map(
        (ev) => ev.vector.map((v) => Number(v))
    );

    return { values, vectors };
}