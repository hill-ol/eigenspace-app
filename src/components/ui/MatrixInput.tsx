"use client";

interface Props {
    matrix: [[number, number], [number, number]];
    onChange: (matrix: [[number, number], [number, number]]) => void;
}

export default function MatrixInput({ matrix, onChange }: Props) {
    const update = (row: 0 | 1, col: 0 | 1, val: string) => {
        const n = parseFloat(val);
        if (isNaN(n)) return;
        const next: [[number, number], [number, number]] = [
            [...matrix[0]],
            [...matrix[1]],
        ];
        next[row][col] = n;
        onChange(next);
    };

    const cell = (row: 0 | 1, col: 0 | 1) => (
        <input
            type="number"
            step="0.1"
            value={matrix[row][col]}
            onChange={(e) => update(row, col, e.target.value)}
            className="w-16 rounded border border-zinc-300 bg-white px-2 py-2 text-center font-mono text-lg text-zinc-900 focus:border-zinc-900 focus:outline-none"
        />
    );

    return (
        <div className="inline-flex flex-col gap-1">
            <div className="flex items-center gap-2">
                <span className="font-mono text-2xl text-zinc-300">[</span>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        {cell(0, 0)}
                        {cell(0, 1)}
                    </div>
                    <div className="flex gap-2">
                        {cell(1, 0)}
                        {cell(1, 1)}
                    </div>
                </div>
                <span className="font-mono text-2xl text-zinc-300">]</span>
            </div>
        </div>
    );
}