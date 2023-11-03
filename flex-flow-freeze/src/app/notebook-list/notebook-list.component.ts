import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Note } from '../shared/note.model';
import { NotesService } from '../shared/notes.service';

@Component({
  selector: 'app-notebook-list',
  templateUrl: './notebook-list.component.html',
  styleUrls: ['./notebook-list.component.css'],
  animations: [
    trigger('itemAnim', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        animate(
          '50ms',
          style({
            height: '*',
            'margin-bottom': '*',
            paddingTop: '*',
            paddingBottom: '*',
            paddingRight: '*',
            paddingLeft: '*',
          })
        ),
        animate(200),
      ]),

      transition('* => void', [
        animate(
          50,
          style({
            transform: 'scale(1.05)',
          })
        ),
        animate(
          50,
          style({
            transform: 'scale(1)',
            opacity: '0.75',
          })
        ),
        animate(
          '120ms ease-out',
          style({
            opacity: 0,
            transform: 'scale(0.68)',
          })
        ),
        animate(
          '150ms ease-out',
          style({
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
            'margin-bottom': 0,
          })
        ),
      ]),
    ]),
    trigger('listAnim', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({
              opacity: 0,
              height: 0,
            }),
            stagger(100, [animate('0.2s ease')]),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
})
export class NotebookListComponent implements OnInit {
  @ViewChild('searchInput') searchInputRef!: ElementRef<HTMLInputElement>;

  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes = this.notesService.getAll();
    this.filteredNotes = this.notesService.getAll();
  }
  deleteNote(note: Note) {
    let noteId = this.notesService.getId(note);
    this.notesService.delete(noteId);
    this.filter(this.searchInputRef.nativeElement.value);
  }

  generateNoteURL(note: Note): string {
    let noteId = this.notesService.getId(note);
    return noteId.toString();
  }

  filter(query: string) {
    query = query.toLocaleLowerCase().trim();
    let allResults: Note[] = new Array<Note>();
    let terms: string[] = query.split(' ');
    terms = this.removeDuplicates(terms);
    terms.forEach((term) => {
      let results: Note[] = this.releventNotes(term);
      allResults = [...allResults, ...results];
    });
    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotes = uniqueResults;

    this.sortByRelevancy(allResults);
  }
  removeDuplicates(arr: Array<any>): Array<any> {
    let uniqueResults: Set<any> = new Set<any>();
    arr.forEach((element) => uniqueResults.add(element));

    return Array.from(uniqueResults);
  }

  releventNotes(query: string) {
    query = query.toLocaleLowerCase().trim();
    let releventNotes = this.notes.filter((note) => {
      if (note.title && note.title.toLocaleLowerCase().includes(query)) {
        return true;
      }
      if (note.body && note.body.toLocaleLowerCase().includes(query)) {
        return true;
      }
      return false;
    });
    return releventNotes;
  }

  sortByRelevancy(searchResults: Note[]) {
    let noteCountObj: { [key: number]: number } = {};

    searchResults.forEach((note) => {
      let noteId = this.notesService.getId(note);

      if (noteCountObj[noteId]) {
        noteCountObj[noteId] += 1;
      } else {
        noteCountObj[noteId] = 1;
      }
    });

    this.filteredNotes = this.filteredNotes.sort((a: Note, b: Note) => {
      let aId = this.notesService.getId(a);
      let bId = this.notesService.getId(b);

      let aCount = noteCountObj[aId];
      let bCount = noteCountObj[bId];

      return bCount - aCount;
    });
  }
}
