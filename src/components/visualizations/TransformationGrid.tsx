"use client";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Props {
    matrix: [[number, number], [number, number]];
    width?: number;
    height?: number;
}

export default function TransformationGrid({
                                               matrix,
                                               width = 560,
                                               height = 560,
                                           }: Props) {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const cx = width / 2;
        const cy = height / 2;
        const scale = 60;

        const toScreen = (x: number, y: number) => [
            cx + x * scale,
            cy - y * scale,
        ];

        const transform = (x: number, y: number) => [
            matrix[0][0] * x + matrix[0][1] * y,
            matrix[1][0] * x + matrix[1][1] * y,
        ];

        const gridLines = d3.range(-5, 6);

        // Original grid (light)
        gridLines.forEach((i) => {
            // vertical
            const [x1, y1] = toScreen(i, -5);
            const [x2, y2] = toScreen(i, 5);
            svg.append("line")
                .attr("x1", x1).attr("y1", y1)
                .attr("x2", x2).attr("y2", y2)
                .attr("stroke", "#e4e4e7")
                .attr("stroke-width", 1);

            // horizontal
            const [x3, y3] = toScreen(-5, i);
            const [x4, y4] = toScreen(5, i);
            svg.append("line")
                .attr("x1", x3).attr("y1", y3)
                .attr("x2", x4).attr("y2", y4)
                .attr("stroke", "#e4e4e7")
                .attr("stroke-width", 1);
        });

        // Transformed grid (dark)
        gridLines.forEach((i) => {
            const [tx1, ty1] = transform(i, -5);
            const [sx1, sy1] = toScreen(tx1, ty1);
            const [tx2, ty2] = transform(i, 5);
            const [sx2, sy2] = toScreen(tx2, ty2);
            svg.append("line")
                .attr("x1", sx1).attr("y1", sy1)
                .attr("x2", sx2).attr("y2", sy2)
                .attr("stroke", "#a1a1aa")
                .attr("stroke-width", 1);

            const [tx3, ty3] = transform(-5, i);
            const [sx3, sy3] = toScreen(tx3, ty3);
            const [tx4, ty4] = transform(5, i);
            const [sx4, sy4] = toScreen(tx4, ty4);
            svg.append("line")
                .attr("x1", sx3).attr("y1", sy3)
                .attr("x2", sx4).attr("y2", sy4)
                .attr("stroke", "#a1a1aa")
                .attr("stroke-width", 1);
        });

        // Axes
        const [ax1, ay1] = toScreen(-5, 0);
        const [ax2, ay2] = toScreen(5, 0);
        svg.append("line")
            .attr("x1", ax1).attr("y1", ay1)
            .attr("x2", ax2).attr("y2", ay2)
            .attr("stroke", "#d4d4d8")
            .attr("stroke-width", 1.5);

        const [ay3, ay4] = [toScreen(0, -5), toScreen(0, 5)];
        svg.append("line")
            .attr("x1", ay3[0]).attr("y1", ay3[1])
            .attr("x2", ay4[0]).attr("y2", ay4[1])
            .attr("stroke", "#d4d4d8")
            .attr("stroke-width", 1.5);

        // Basis vector i (original: red, transformed: dark red)
        const drawArrow = (
            x1: number, y1: number,
            x2: number, y2: number,
            color: string,
            opacity = 1
        ) => {
            const markerId = `arrow-${color.replace("#", "")}-${Math.random().toString(36).slice(2)}`;
            svg.append("defs").append("marker")
                .attr("id", markerId)
                .attr("viewBox", "0 0 10 10")
                .attr("refX", 8).attr("refY", 5)
                .attr("markerWidth", 6).attr("markerHeight", 6)
                .attr("orient", "auto")
                .append("path")
                .attr("d", "M 0 0 L 10 5 L 0 10 z")
                .attr("fill", color);

            svg.append("line")
                .attr("x1", x1).attr("y1", y1)
                .attr("x2", x2).attr("y2", y2)
                .attr("stroke", color)
                .attr("stroke-width", 2.5)
                .attr("opacity", opacity)
                .attr("marker-end", `url(#${markerId})`);
        };

        // Original basis vectors (faded)
        const [ox, oy] = toScreen(0, 0);
        const [ix, iy] = toScreen(1, 0);
        const [jx, jy] = toScreen(0, 1);
        drawArrow(ox, oy, ix, iy, "#f87171", 0.35); // i faded red
        drawArrow(ox, oy, jx, jy, "#60a5fa", 0.35); // j faded blue

        // Transformed basis vectors
        const [ti1, ti2] = transform(1, 0);
        const [tix, tiy] = toScreen(ti1, ti2);
        drawArrow(ox, oy, tix, tiy, "#ef4444"); // i transformed red

        const [tj1, tj2] = transform(0, 1);
        const [tjx, tjy] = toScreen(tj1, tj2);
        drawArrow(ox, oy, tjx, tjy, "#3b82f6"); // j transformed blue

    }, [matrix, width, height]);

    return (
        <svg
            ref={svgRef}
            width={width}
            height={height}
            className="rounded-lg border border-zinc-200 bg-white"
        />
    );
}