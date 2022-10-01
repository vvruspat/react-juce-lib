import { Component, PropsWithChildren, ReactElement } from "react";
import { ScrollEvent } from "./ScrollView";
declare type ListViewState = {
    scrollTopPosition: number;
    width: number;
    height: number;
};
declare type VirtualPositions = {
    innerHeight: number;
    startIndex: number;
    endIndex: number;
};
/**
 * ScrollParams is passed to ListView's scrollToIndex
 * function.
 *
 * @property index - The index of the item in the ListView's data
 *                   source to scroll to.
 *
 * @property offset - A normalised value between 0.0 and 1.0 which
 *                    will offset the position of the ListView item
 *                    (specified by index) from the top of the ListView.
 *                    i.e. offset == 0.5 positions the item at index in
 *                    the center of the ListView.
 */
export interface ScrollParams {
    index: number;
    offset: number;
}
/**
 * Prop type for ListView.
 *
 * @property data       - Array of objects to use when populating ListView items
 *                        via the renderItem callback.
 *
 * @property renderItem - Callback to render a ListView item given an element
 *                        from the supplied data source.
 *
 * @property itemHeight - Fixed height in pixels for a single item in the
 *                        ListView.
 */
export interface ListViewProps {
    data: any[];
    renderItem: (any: any) => ReactElement;
    itemHeight: number;
}
/**
 * A lightweight "virtualised list" implementation that allows for
 * the efficient rendering of a large number of objects within a
 * ScrollView. ListView supports the full set of ScrollViewProps
 * for styling etc.
 *
 * Note, at present ListView requires the user to specify a fixed
 * itemHeight property in order to calculate which items to render
 * within the list based on scroll position. This may change in
 * future versions.
 *
 * @example
 *
 * function getListViewItems() {
 *   let items = [];
 *
 *   for (let i = 0; i < 5000; ++i) {
 *     const name     = "Item " + i;
 *     const category = i % 2 ? "A" : "B";
 *
 *     items.push({id: i, name: name, category: category});
 *   }
 *
 *   return items;
 * }
 *
 * <ListView
 *   height="100%"
 *   width="50%"
 *   overflow="hidden"
 *   scroll-on-drag={true}
 *   data={getListViewItems()}
 *   renderItem={(item, index, props) => <Item name={item.name} category={item.category} {...props}/>}
 *   itemHeight={50}
 * />
 *
 */
export declare class ListView extends Component<PropsWithChildren<ListViewProps | any>, ListViewState> {
    private _ref;
    constructor(props: PropsWithChildren<ListViewProps | any>);
    _onMeasure(e: any): void;
    _calculateVirtualPositions(): VirtualPositions;
    _setScrollTopPosition(e: ScrollEvent): void;
    scrollToIndex(scrollParams: ScrollParams): void;
    render(): JSX.Element;
}
export {};
