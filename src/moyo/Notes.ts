export type Note =
    | 'a_flat'
    | 'a'
    | 'low_a'
    | 'a_sharp'
    | 'b_flat'
    | 'b'
    | 'c'
    | 'c_sharp'
    | 'd_flat'
    | 'd'
    | 'd_sharp'
    | 'e_flat'
    | 'e'
    | 'f'
    | 'f_sharp'
    | 'g_flat'
    | 'g'
    | 'g_sharp';

export class Notes {

    private static readonly howlMap = new Map<Note, Howl>();

    /**
     * @param note The `Note` of which to access the Howl object.
     */
    public static getHowl(note: Notes): Howl {
        return new Howl({src: ''});
    }

}

