"use client";
import { useState } from "react";
import TransformationGrid from "@/components/visualizations/TransformationGrid";
import MatrixInput from "@/components/ui/MatrixInput";
import DisplayMath from "@/components/ui/DisplayMath";
import InlineMath from "@/components/ui/InlineMath";

export default function Chapter01() {
    const [matrix, setMatrix] = useState<[[number, number], [number, number]]>([
        [2, 1],
        [0, 1],
    ]);

    return (
        <div className="space-y-12">
            <section>
                <h2>Space as a function</h2>
                <p>
                    A matrix is not just a grid of numbers. It is a <em>function</em> —
                    one that takes every point in 2D space and moves it somewhere else.
                    The matrix <InlineMath math="A" /> applied to a vector{" "}
                    <InlineMath math="\mathbf{v}" /> produces a new vector{" "}
                    <InlineMath math="A\mathbf{v}" />.
                </p>
                <p>
                    The most natural way to understand what a matrix <em>does</em> is to
                    watch it act on the entire plane at once — every gridline, every
                    point, transformed simultaneously.
                </p>
            </section>

            <section>
                <h2>Try it</h2>
                <p>
                    Edit the matrix entries below. The light gray grid is the original
                    plane. The darker grid is where it lands after the transformation.
                    The red arrow is the basis vector{" "}
                    <InlineMath math="\mathbf{e}_1 = (1, 0)" /> and the blue arrow is{" "}
                    <InlineMath math="\mathbf{e}_2 = (0, 1)" />.
                </p>

                <div className="my-8 flex flex-col items-start gap-8 lg:flex-row lg:items-start">
                    <div className="flex flex-col gap-4">
                        <MatrixInput matrix={matrix} onChange={setMatrix} />
                        <div className="space-y-1 font-mono text-xs text-zinc-400">
                            <p>Try: identity [[1,0],[0,1]]</p>
                            <p>Try: rotation [[0,-1],[1,0]]</p>
                            <p>Try: shear [[1,1],[0,1]]</p>
                            <p>Try: scale [[2,0],[0,2]]</p>
                        </div>
                    </div>
                    <TransformationGrid matrix={matrix} />
                </div>
            </section>

            <section>
                <h2>Columns as destinations</h2>
                <p>
                    Notice that the transformed red arrow always lands on the first
                    column of your matrix, and the blue arrow on the second. This is not
                    a coincidence — it is the definition. A matrix{" "}
                    <InlineMath math="A" /> tells you exactly where the two basis vectors
                    go, and everything else follows by linearity.
                </p>
                <DisplayMath math="A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}, \quad \mathbf{e}_1 \mapsto \begin{bmatrix} a \\ c \end{bmatrix}, \quad \mathbf{e}_2 \mapsto \begin{bmatrix} b \\ d \end{bmatrix}" />
                <p>
                    Any vector <InlineMath math="\mathbf{v} = x\mathbf{e}_1 + y\mathbf{e}_2" />{" "}
                    gets sent to{" "}
                    <InlineMath math="xA\mathbf{e}_1 + yA\mathbf{e}_2" /> — a weighted
                    combination of those two destinations. The whole transformation is
                    determined by just four numbers.
                </p>
            </section>

            <section>
                <h2>What to watch for</h2>
                <p>
                    As you manipulate the matrix, pay attention to a specific
                    question: are there any vectors whose <em>direction</em> does not
                    change? They may get longer or shorter — but they stay on the same
                    line through the origin. Those vectors are special. They are the
                    subject of every chapter that follows.
                </p>
            </section>
        </div>
    );
}