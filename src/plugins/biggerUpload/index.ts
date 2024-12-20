/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2024 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import definePlugin from "@utils/types";

export default definePlugin({
    name: "Bigger Upload",
    description: "Reverts the free upload size limit back to 25MB",
    authors: [{ name: "Kaydax", id: 142782417994907648n }],
    patches: [
        {
            find: "GLOBAL_DISCOVERY:\"/discovery\"",
            replacement: {
                match: /10485760/,
                replace: "26214400"
            }
        },
        {
            find: "client_build_number",
            replacement: {
                match: /client_build_number=[a-zA-Z]+/,
                replace: "client_build_number=10000"
            }
        }
    ]
});
