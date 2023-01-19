import { createElement } from "./createElement";

export const createCssColors = (colors)=>{

    let style = createElement('style');

    colors.forEach(color => {
        style.textContent += `
            .color--${color.title}:after{
                background-color: ${color.code};
                ${color.title === 'white' ? 'border: 1px solid #8A8A8A' : ''}
            }
        `;
    });

    //! - черновик
    // &--black{
    //     &::after{
    //         background-color: black;
    //         border: 1px solid black;
    //     }
    // }
    // &--red{
    //     &::after{
    //         border: 1px solid red;
    //         background-color: red;
    //     }
    // }
    // &--check{
    //     border: 0.4px solid #929292;
    // }
    // &--white{
    //     &:after{
    //         background-color: $second-color;
    //         border: 1px solid $main-color;
    //     }
    // }

    document.head.append(style);
};