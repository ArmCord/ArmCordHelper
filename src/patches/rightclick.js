// MIT License

// Copyright (c) 2021 GooseMod Modules

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//Source: https://github.com/GooseMod-Modules/WebRightClick
import {webpackModules} from '@cumcord/modules';
const parentModule = webpackModules.findByProps('useContextMenuMessage', 'useClickMessage');
const originalFunc = parentModule.useContextMenuMessage;
export function start() {
    
    const v = webpackModules.findByProps('hasFlag');
    const S = webpackModules.findByProps('MessageFlags');
    const _ = webpackModules.find((x) => x.default?.toString().includes('return!r.USER_MESSAGE_TYPES.has(e.type)&&'));
    const y = {
      default: {
        embedded: true
      }
    };
    const r = webpackModules.findByProps('createElement');
    const g = { default: webpackModules.findByDisplayName("SystemMessageContextMenu") };
    const E = { default: webpackModules.findByDisplayName("MessageContextMenu") };
    const o = webpackModules.findByProps('openContextMenu');
    
    const u = { default: webpackModules.findByProps('getChannel') };
    const d = { default: webpackModules.findByProps('getMessage') };
    const s = { default: webpackModules.findByProps('isEditing') };
    
    const C = Object.assign;
    
    function useContextMenuMessage (e, t, n) {
      var a = t.id,
      i = e.id,
      l = e.flags,
      f = (0, v.hasFlag)(l, S.MessageFlags.EPHEMERAL),
      c = (0, _.default)(e);
      return r.useCallback((function (e, t) {
        if (y.default.embedded && !f) {
          var l = u.default.getChannel(a),
          p = d.default.getMessage(a, i),
          v = s.default.isEditing(a, i);
          null == l || null == p || v || (n({
            contextMenu: !0
          }), (0, o.openContextMenu)(e, (function (e) {
            return c ? r.createElement(g.default, C({}, e, {
              message: p,
              channel: l,
              attachment: t
            })) : r.createElement(E.default, C({}, e, {
              message: p,
              channel: l,
              attachment: t
            }))
          }), {
            onClose: function () {
              return n({
                contextMenu: !1
              })
            }
          }))
        }
      }), [f, a, i, n, c])
    }
  
    parentModule.useContextMenuMessage = useContextMenuMessage;
}
export function stop() {
    parentModule.useContextMenuMessage = originalFunc;
}