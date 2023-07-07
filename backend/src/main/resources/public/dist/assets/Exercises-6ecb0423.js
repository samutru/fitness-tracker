import { d as E, c as d, w as l, u as e, b as n, e as a, I as p, f as C, g as t, D as L, B as h, h as g, L as T, y as O, N as S, O as r, j as A, H as i, J as k, K as b, s as U, t as m, P as I, v as D, q as v, x, C as F, i as B, k as H, l as M, m as P, n as R, p as Y, M as $ } from './index-e05d4bb7.js';
import { U as j } from './useExerciseInfos-3b1ff843.js';
const q = B('h3', null, 'Description:', -1),
  z = { key: 0 },
  G = B('h3', null, 'YouTube:', -1),
  J = ['src'],
  ee = E({
    __name: 'Exercises',
    setup(K) {
      const { groupedExerciseInfos: V, isOpen: w, setOpen: y, selectedBodypart: f, searchInput: c, selectedExercise: o } = j();
      return (Q, s) => (
        n(),
        d(e(F), null, {
          default: l(() => [
            a(e(g), null, { default: l(() => [a(e(p), null, { default: l(() => [a(e(C), null, { default: l(() => [t('Exercises')]), _: 1 })]), _: 1 }), a(e(p), null, { default: l(() => [a(e(L), { modelValue: e(c), 'onUpdate:modelValue': s[0] || (s[0] = (u) => (h(c) ? (c.value = u) : null)) }, null, 8, ['modelValue'])]), _: 1 })]), _: 1 }),
            a(
              e(x),
              { fullscreen: !0, class: 'ion-padding' },
              {
                default: l(() => [
                  a(e(T), null, {
                    default: l(() => [
                      a(e(O), null, {
                        default: l(() => [
                          a(
                            e(S),
                            { 'aria-label': 'Bodypart', interface: 'alert', placeholder: 'Select Bodypart', modelValue: e(f), 'onUpdate:modelValue': s[1] || (s[1] = (u) => (h(f) ? (f.value = u) : null)) },
                            {
                              default: l(() => [
                                a(e(r), { value: 'Abs' }, { default: l(() => [t('Abs')]), _: 1 }),
                                a(e(r), { value: 'Arms' }, { default: l(() => [t('Arms')]), _: 1 }),
                                a(e(r), { value: 'Chest' }, { default: l(() => [t('Chest')]), _: 1 }),
                                a(e(r), { value: 'Legs' }, { default: l(() => [t('Legs')]), _: 1 }),
                                a(e(r), { value: 'NoFilter' }, { default: l(() => [t('No Filter')]), _: 1 }),
                              ]),
                              _: 1,
                            },
                            8,
                            ['modelValue']
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }),
                  a(e(A), null, {
                    default: l(() => [
                      (n(!0),
                      i(
                        b,
                        null,
                        k(
                          e(V),
                          (u, N) => (
                            n(),
                            d(
                              e(H),
                              { key: N },
                              {
                                default: l(() => [
                                  (n(!0),
                                  i(
                                    b,
                                    null,
                                    k(
                                      u,
                                      (_) => (
                                        n(),
                                        d(
                                          e(M),
                                          { size: '6', key: _.id },
                                          {
                                            default: l(() => [
                                              a(
                                                e(P),
                                                { color: 'primary', style: { height: '8rem' } },
                                                {
                                                  default: l(() => [
                                                    a(e(R), null, { default: l(() => [a(e(Y), { style: { 'text-align': 'center' } }, { default: l(() => [t(m(_.name), 1)]), _: 2 }, 1024)]), _: 2 }, 1024),
                                                    a(e($), null, { default: l(() => [a(e(v), { expand: 'block', onClick: (W) => e(y)(!0, _), color: 'light' }, { default: l(() => [t('Open')]), _: 2 }, 1032, ['onClick'])]), _: 2 }, 1024),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                                _: 2,
                              },
                              1024
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }),
                  a(
                    e(U),
                    { 'is-open': e(w) },
                    {
                      default: l(() => [
                        a(e(g), null, { default: l(() => [a(e(p), null, { default: l(() => [e(o) ? (n(), d(e(C), { key: 0 }, { default: l(() => [t(m(e(o).name), 1)]), _: 1 })) : I('', !0), a(e(D), { slot: 'end' }, { default: l(() => [a(e(v), { onClick: s[2] || (s[2] = (u) => e(y)(!1, null)) }, { default: l(() => [t('Close')]), _: 1 })]), _: 1 })]), _: 1 })]), _: 1 }),
                        a(
                          e(x),
                          { class: 'ion-padding' },
                          {
                            default: l(() => [
                              q,
                              e(o) ? (n(), i('p', z, m(e(o).description), 1)) : I('', !0),
                              G,
                              e(o) ? (n(), i('iframe', { key: 1, width: '560', height: '315', src: e(o).youtubeLink, title: 'YouTube video player', frameborder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share', allowfullscreen: '' }, null, 8, J)) : I('', !0),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ['is-open']
                  ),
                ]),
                _: 1,
              }
            ),
          ]),
          _: 1,
        })
      );
    },
  });
export { ee as default };
