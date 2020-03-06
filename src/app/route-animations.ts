import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
} from '@angular/animations';

export const slider =
    trigger('routeAnimations', [
        transition('* => isLeft', slideTo('left')),
        transition('* => isRight', slideTo('right')),
        transition('isRight => *', slideTo('left')),
        transition('isLeft => *', slideTo('right')),
    ]);

function slideTo(direction: string) {
    const optional = { optional: true };

    return [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], optional),
        query(':enter', [
            style({ [direction]: '-100%' })
        ]),
        group([
            query(':leave', [
                animate('250ms linear', style({ [direction]: '100%' }))
            ], optional),
            query(':enter', [
                animate('250ms linear', style({ [direction]: '0%' }))
            ])
        ])
    ];
}
